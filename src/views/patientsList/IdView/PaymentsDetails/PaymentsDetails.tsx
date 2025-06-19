import React, { useState } from "react";
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
import GeneralFilterPopUp from "../../../../components/PupUps/FilterPopUp/FilterPopUp";
import { handleCheckStoreValue } from "../../../../utils/ObjectFuctions";

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

  const [ShowFilterPopUp, setShowFilterPopUp] = useState<boolean>(false);
  const [StatusVal, setStatusVal] = useState<string>("");
  const handleTagClick = (index: number) => {
    if (index === 0) {
      setShowFilterPopUp(true);
    }
  };
  const handleRefresh = () => {
    setStatusVal(""); // Reset StatusVal
  };
  const filteredData = formattedData.filter((item) => {
    const StatusItem = StatusVal ? item.Status === StatusVal : true;

    return StatusItem; // Both filters are applied simultaneously
  });
  return (
    <PageFlex>
      {showExpand && (
        <TableExpandNavigator
          text="Payments History"
          ExpandClick={() => setShowExpand && setShowExpand(!showExpand)}
        />
      )}
      <Table
        TableTitle={showExpand ? "Payments Details" : "Payments History"}
        columns={PaymentsDetailsColumnData}
        rows={filteredData}
        showExpand={showExpand}
        setShowExpand={setShowExpand}
        ExpandClick={ExpandClick}
        // flexWidths={[1, 1, 0.6, 1.2]}
        ExcelTableName="PaymentsHistory"
        IndexShows={[4]}
        onFilterIndexClick={handleTagClick}
        RefreshClick={handleRefresh}
        TextFilterShows={[{ value: StatusVal, setValue: setStatusVal }]}
      />

      <GeneralFilterPopUp
        ContextValue={StatusVal}
        RenderedValueKey="Status"
        show={ShowFilterPopUp}
        setShow={setShowFilterPopUp}
        data={formattedData}
        RadioChanges={(e) => handleCheckStoreValue(e, setStatusVal)}
        // closeClick={() => setPopUpText("")}
      />
    </PageFlex>
  );
};

export default PaymentsDetails;
