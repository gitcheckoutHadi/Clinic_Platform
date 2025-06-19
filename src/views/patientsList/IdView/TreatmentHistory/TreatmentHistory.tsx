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
import GeneralFilterPopUp from "../../../../components/PupUps/FilterPopUp/FilterPopUp";
import { handleCheckStoreValue } from "../../../../utils/ObjectFuctions";

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
  const [Show, setShow] = useState<boolean>(true);
  const [ObjectId, setObjectId] = useState<number | null>(null);
  const [ProgressVal, setProgressVal] = useState<string>("");
  const [popUpText, setPopUpText] = useState("");
  const handleTagClick = (index: number) => {
    if (index === 0) {
      setPopUpText("openProgress");
    }
  };
  const handleRefresh = () => {
    setProgressVal(""); // Reset ProgressVal
  };

  const filteredData = formattedData.filter((item) => {
    const ProgressItem = ProgressVal ? item.Progress === ProgressVal : true;

    return ProgressItem; // Both filters are applied simultaneously
  });
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
        rows={filteredData}
        showExpand={showExpand}
        setShowExpand={setShowExpand}
        ExpandClick={ExpandClick}
        // flexWidths={[1, 1, 0.6, 1.2]}
        ExcelTableName="TreatmentHistory"
        EyeShow={true}
        PropsObjectId={ObjectId}
        setPropsObjectId={setObjectId}
        PopUpContent={<TreatmentPopUp SourceId={ObjectId} />}
        PopUpTitle="Cycle Progress"
        PopUpContentWidth="70%"
        IndexShows={[1]}
        onFilterIndexClick={handleTagClick}
        RefreshClick={handleRefresh}
        TextFilterShows={[{ value: ProgressVal, setValue: setProgressVal }]}
      />

      {popUpText === "openProgress" && (
        <GeneralFilterPopUp
          ContextValue={ProgressVal}
          RenderedValueKey="Progress"
          show={Show}
          setShow={setShow}
          data={formattedData}
          RadioChanges={(e) => handleCheckStoreValue(e, setProgressVal)}
          closeClick={() => setPopUpText("")}
        />
      )}
    </PageFlex>
  );
};

export default TreatmentHistory;
