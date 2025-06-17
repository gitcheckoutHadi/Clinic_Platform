import React, { useState } from "react";
import { ExpandedTableInterface } from "../../../../Interface/TableInterface/TableInterface";
import {
  TreatmentHistoryColumnData,
  TreatmentHistoryData,
} from "./TreatmentHistoryData";
import { DateNumberFormat } from "../../../../utils/DateFormate";
import { PageFlex } from "../../../../globalStyles";
import Table from "../../../../components/Table/Table";
import TableExpandNavigator from "../../../../elements/headerNavigator/TableExpandeNavigator";
import TreatmentPopUp from "./TreatmentPopUp/TreatmentPopUp";

const TreatmentHistory = ({
  showExpand,
  ExpandClick,
  setShowExpand,
  id,
}: ExpandedTableInterface) => {
  const formattedData = TreatmentHistoryData.map((item: any) => ({
    SourceId: item.SourceId,
    Treatment: item.Treatment,
    Progress: item.Progress,
    Date: DateNumberFormat(item.Date),
    Details: item.Details,
  }));
  console.log("formattedData", formattedData);
  const [ObjectId, setObjectId] = useState<number | null>(null);
  return (
    <PageFlex>
      {showExpand && (
        <TableExpandNavigator
          text="Treatment History"
          ExpandClick={() => setShowExpand && setShowExpand(!showExpand)}
        />
      )}
      <Table
        TableTitle={showExpand ? "Treatment Details" : "Treatment History"}
        columns={TreatmentHistoryColumnData}
        rows={formattedData}
        showExpand={showExpand}
        setShowExpand={setShowExpand}
        ExpandClick={ExpandClick}
        flexWidths={[1, 1, 0.6, 1.2]}
        ExcelTableName="TreatmentHistory"
        EyeShow={true}
        PropsObjectId={ObjectId}
        setPropsObjectId={setObjectId}
        PopUpContent={<TreatmentPopUp SourceId={ObjectId} />}
        PopUpTitle="Cycle Progress"
        PopUpContentWidth="70%"
      />
    </PageFlex>
  );
};

export default TreatmentHistory;
