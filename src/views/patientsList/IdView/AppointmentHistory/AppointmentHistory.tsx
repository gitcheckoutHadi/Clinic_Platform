import React from "react";
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
        rows={formattedData}
        showExpand={showExpand}
        setShowExpand={setShowExpand}
        ExpandClick={ExpandClick}
        // flexWidths={[1, 0.6, 0.5, 0.6, 1.1]}
        ExcelTableName="AppointmentHistory"
      />
    </PageFlex>
  );
};

export default AppointmentHistory;
