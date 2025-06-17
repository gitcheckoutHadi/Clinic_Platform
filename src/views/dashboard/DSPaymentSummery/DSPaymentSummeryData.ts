export interface PaymentEntry {
  title: string;
  percentValue: string;
  salaryValue: string;
  Date: Date;
}

// Define the type for individual field items
export type FieldItem = {
  title: string;
  percentValue: string;
  salaryValue: string;
  Date: Date;
};

// Define the type for each group of fields
export type PaymentGroup = {
  field: FieldItem[];
};

// Define the type for the entire PaymentSummaryAllData array
export type PaymentData = PaymentGroup[];

// Export the PaymentSummaryAllData array
export const PaymentSummaryAllData: PaymentData = [
  {
    field: [
      {
        title: "Collected",
        percentValue: "28%",
        salaryValue: "$11,500",
        Date: new Date(2025, 0, 10, 10, 0), // Jan 10
      },
      {
        title: "Pending collection",
        percentValue: "42%",
        salaryValue: "$95",
        Date: new Date(2025, 0, 10, 10, 0),
      },
      {
        title: "Overdue payment",
        percentValue: "30%",
        salaryValue: "$185,000",
        Date: new Date(2025, 0, 10, 10, 0),
      },
    ],
  },
  {
    field: [
      {
        title: "Collected",
        percentValue: "35%",
        salaryValue: "$14,200",
        Date: new Date(2025, 1, 15, 14, 15), // Feb 15
      },
      {
        title: "Pending collection",
        percentValue: "38%",
        salaryValue: "$210",
        Date: new Date(2025, 1, 15, 14, 15),
      },
      {
        title: "Overdue payment",
        percentValue: "27%",
        salaryValue: "$165,300",
        Date: new Date(2025, 1, 15, 14, 15),
      },
    ],
  },
  {
    field: [
      {
        title: "Collected",
        percentValue: "22%",
        salaryValue: "$9,800",
        Date: new Date(2025, 2, 22, 11, 45), // Mar 22
      },
      {
        title: "Pending collection",
        percentValue: "45%",
        salaryValue: "$180",
        Date: new Date(2025, 2, 22, 11, 45),
      },
      {
        title: "Overdue payment",
        percentValue: "33%",
        salaryValue: "$210,500",
        Date: new Date(2025, 2, 22, 11, 45),
      },
    ],
  },
  {
    field: [
      {
        title: "Collected",
        percentValue: "40%",
        salaryValue: "$17,000",
        Date: new Date(2025, 3, 5, 8, 30), // Apr 5
      },
      {
        title: "Pending collection",
        percentValue: "30%",
        salaryValue: "$75",
        Date: new Date(2025, 3, 5, 8, 30),
      },
      {
        title: "Overdue payment",
        percentValue: "30%",
        salaryValue: "$143,200",
        Date: new Date(2025, 3, 5, 8, 30),
      },
    ],
  },
  {
    field: [
      {
        title: "Collected",
        percentValue: "25%",
        salaryValue: "$12,300",
        Date: new Date(2025, 4, 18, 16, 20), // May 18
      },
      {
        title: "Pending collection",
        percentValue: "50%",
        salaryValue: "$300",
        Date: new Date(2025, 4, 18, 16, 20),
      },
      {
        title: "Overdue payment",
        percentValue: "25%",
        salaryValue: "$99,750",
        Date: new Date(2025, 4, 18, 16, 20),
      },
    ],
  },
  {
    field: [
      {
        title: "Collected",
        percentValue: "31%",
        salaryValue: "$13,450",
        Date: new Date(2025, 5, 7, 12, 0), // Jun 7
      },
      {
        title: "Pending collection",
        percentValue: "44%",
        salaryValue: "$150",
        Date: new Date(2025, 5, 7, 12, 0),
      },
      {
        title: "Overdue payment",
        percentValue: "25%",
        salaryValue: "$87,900",
        Date: new Date(2025, 5, 7, 12, 0),
      },
    ],
  },
  {
    field: [
      {
        title: "Collected",
        percentValue: "18%",
        salaryValue: "$7,200",
        Date: new Date(2025, 6, 30, 9, 0), // Jul 30
      },
      {
        title: "Pending collection",
        percentValue: "60%",
        salaryValue: "$450",
        Date: new Date(2025, 6, 30, 9, 0),
      },
      {
        title: "Overdue payment",
        percentValue: "22%",
        salaryValue: "$123,000",
        Date: new Date(2025, 6, 30, 9, 0),
      },
    ],
  },
  {
    field: [
      {
        title: "Collected",
        percentValue: "37%",
        salaryValue: "$15,800",
        Date: new Date(2025, 7, 12, 15, 45), // Aug 12
      },
      {
        title: "Pending collection",
        percentValue: "35%",
        salaryValue: "$90",
        Date: new Date(2025, 7, 12, 15, 45),
      },
      {
        title: "Overdue payment",
        percentValue: "28%",
        salaryValue: "$210,000",
        Date: new Date(2025, 7, 12, 15, 45),
      },
    ],
  },
  {
    field: [
      {
        title: "Collected",
        percentValue: "29%",
        salaryValue: "$10,500",
        Date: new Date(2025, 8, 1, 10, 10), // Sep 1
      },
      {
        title: "Pending collection",
        percentValue: "47%",
        salaryValue: "$220",
        Date: new Date(2025, 8, 1, 10, 10),
      },
      {
        title: "Overdue payment",
        percentValue: "24%",
        salaryValue: "$155,550",
        Date: new Date(2025, 8, 1, 10, 10),
      },
    ],
  },
  {
    field: [
      {
        title: "Collected",
        percentValue: "33%",
        salaryValue: "$14,750",
        Date: new Date(2025, 9, 25, 17, 30), // Oct 25
      },
      {
        title: "Pending collection",
        percentValue: "40%",
        salaryValue: "$175",
        Date: new Date(2025, 9, 25, 17, 30),
      },
      {
        title: "Overdue payment",
        percentValue: "27%",
        salaryValue: "$199,999",
        Date: new Date(2025, 9, 25, 17, 30),
      },
    ],
  },
];

export const PaymentSummaryData = {
  data: [
    {
      title: "Collected",
      percentValue: "30%",
      salaryValue: "$12000",
    },
    {
      title: "Pending collection",
      percentValue: "33%",
      salaryValue: "$120",
    },
    {
      title: "Overdue payment ",
      percentValue: "37%",
      salaryValue: "$200,250",
    },
  ],
  Total: "$711,627",
};
