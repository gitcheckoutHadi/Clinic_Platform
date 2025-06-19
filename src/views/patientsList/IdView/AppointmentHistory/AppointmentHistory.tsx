import React, { useState } from "react";
import { PageFlex } from "../../../../globalStyles";
import HeaderNavigator from "../../../../elements/headerNavigator/HeaderNavigator";
import { ExpandedTableInterface } from "../../../../Interface/TableInterface/TableInterface";
import {
  AppointmentHistoryColumnData,
  AppointmentHistoryData,
} from "./AppointmentHistoryData";
import { DateNumberFormat } from "../../../../utils/DateFormate";
import { formatTime } from "../../../../utils/Time";
import Table from "../../../../components/Table/Table";
import TableExpandNavigator from "../../../../elements/headerNavigator/TableExpandeNavigator";
import { useTranslation } from "react-i18next";
import GeneralFilterPopUp from "../../../../components/PupUps/FilterPopUp/FilterPopUp";
import { handleCheckStoreValue } from "../../../../utils/ObjectFuctions";

const AppointmentHistory = ({
  showExpand,
  ExpandClick,
  setShowExpand,
  id,
}: ExpandedTableInterface) => {
  const { t } = useTranslation();

  const formattedData = AppointmentHistoryData.map((item: any) => ({
    SourceId: item.SourceId,
    Event: item.Event,
    Date: DateNumberFormat(item.DateAndTime),
    Time: formatTime(item.DateAndTime),
    Status: item.Status,
    Notes: item.Notes,
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
          text="Appointment History"
          ExpandClick={() => setShowExpand && setShowExpand(!showExpand)}
        />
      )}
      <Table
        TableTitle={showExpand ? "Appointment Details" : "Appointment History"}
        columns={AppointmentHistoryColumnData}
        rows={filteredData}
        showExpand={showExpand}
        setShowExpand={setShowExpand}
        ExpandClick={ExpandClick}
        // flexWidths={[1, 0.6, 0.5, 0.6, 1.1]}
        ExcelTableName="AppointmentHistory"
        IndexShows={[3]}
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

export default AppointmentHistory;
