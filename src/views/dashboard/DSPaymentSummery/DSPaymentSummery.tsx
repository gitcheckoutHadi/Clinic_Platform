import React, { useState, useEffect } from "react";
import PaymentSummary from "../../../components/PaymentSummaryV2/PaymentSummary";
import {
  PaymentSummaryAllData,
  PaymentSummaryData,
} from "./DSPaymentSummeryData";

// Define Type for the Filtered Data
interface PaymentSummaryItem {
  title: string;
  percentValue: string;
  salaryValue: string;
}

interface FilteredData {
  data: PaymentSummaryItem[];
  Total: string;
}

const DSPaymentSummery = () => {
  // Explicitly define state type
  const [filteredData, setFilteredData] = useState<FilteredData>({
    data: [],
    Total: "$0",
  });

  const filterData = (
    type: "Today" | "Monthly" | "Weekly" | "3 Months" | "6 Months"
  ) => {
    const now = new Date();
    const startDate = new Date();

    switch (type) {
      case "Today":
        startDate.setHours(0, 0, 0, 0);
        break;
      case "Monthly":
        startDate.setMonth(now.getMonth() - 1);
        break;
      case "Weekly":
        startDate.setDate(now.getDate() - 7);
        break;
      case "3 Months":
        startDate.setMonth(now.getMonth() - 3);
        break;
      case "6 Months":
        startDate.setMonth(now.getMonth() - 6);
        break;
      default:
        return;
    }

    // Filter and transform the data
    const filteredFields = PaymentSummaryAllData.flatMap((item) =>
      item.field.filter((entry) => entry.Date >= startDate)
    );

    const groupedData: PaymentSummaryItem[] = [
      "Collected",
      "Pending collection",
      "Overdue payment",
    ].map((title) => {
      const matchingItems = filteredFields.filter(
        (item) => item.title === title
      );
      const totalPercent =
        matchingItems.reduce(
          (sum, item) => sum + parseFloat(item.percentValue),
          0
        ) / (matchingItems.length || 1);
      const totalSalary = matchingItems.reduce(
        (sum, item) =>
          sum + parseFloat(item.salaryValue.replace(/[^0-9.]/g, "")),
        0
      );

      return {
        title,
        percentValue: `${totalPercent.toFixed(2)}%`,
        salaryValue: `$${totalSalary.toLocaleString()}`,
      };
    });

    // Calculate the total amount
    const totalAmount = filteredFields.reduce(
      (sum, item) => sum + parseFloat(item.salaryValue.replace(/[^0-9.]/g, "")),
      0
    );

    // Update state with correct type
    setFilteredData({
      data: groupedData,
      Total: `$${totalAmount.toLocaleString()}`,
    });
  };

  const actions = [
    { text: "Today", action: () => filterData("Today") },
    { text: "Weekly", action: () => filterData("Weekly") },
    { text: "Monthly", action: () => filterData("Monthly") },

    { text: "3 Months", action: () => filterData("3 Months") },
    { text: "6 Months", action: () => filterData("6 Months") },
  ];

  // Apply "Weekly" filter by default on component mount
  useEffect(() => {
    filterData("Weekly");
  }, []);

  return <PaymentSummary PaymentSummaryData={filteredData} actions={actions} />;
};

export default DSPaymentSummery;
