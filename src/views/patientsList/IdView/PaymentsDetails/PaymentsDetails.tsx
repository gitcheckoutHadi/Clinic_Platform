import React from "react";
import { ExpandedTableInterface } from "../../../../Interface/TableInterface/TableInterface";
import {
  PaymentsDetailsColumnData,
  PaymentsDetailsData,
} from "./PaymentsDetailsData";
import { useTranslation } from "react-i18next";
import { DateNumberFormat } from "../../../../utils/DateFormate";
import { PageFlex } from "../../../../globalStyles";
import TableExpandNavigator from "../../../../elements/headerNavigator/TableExpandeNavigator";
import Table from "../../../../components/Table/Table";

const PaymentsDetails = ({
  showExpand,
  ExpandClick,
  setShowExpand,
  id,
}: ExpandedTableInterface) => {
  const { t } = useTranslation();

  const formattedData = PaymentsDetailsData.map((item: any) => ({
    SourceId: item.SourceId,
    OrderName: item.OrderName,
    Date: DateNumberFormat(item.Date),
    BillNumber: item.BillNumber,
    Amount: item.Amount,
    Status: t(`table.${item.Status}`),
  }));
  return (
    <PageFlex>
      {showExpand && (
        <TableExpandNavigator
          text="Treatment History"
          ExpandClick={() => setShowExpand && setShowExpand(!showExpand)}
        />
      )}
      <Table
        TableTitle={showExpand ? "Payments Details" : "Payments History"}
        columns={PaymentsDetailsColumnData}
        rows={formattedData}
        showExpand={showExpand}
        setShowExpand={setShowExpand}
        ExpandClick={ExpandClick}
        flexWidths={[1, 1, 0.6, 1.2]}
        ExcelTableName="PaymentsHistory"
      />
    </PageFlex>
  );
};

export default PaymentsDetails;
