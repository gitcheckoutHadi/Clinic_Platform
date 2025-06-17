import React from "react";
import ShadowBox from "../../../components/ShadowBox/ShadowBox";
import { PointerContainer, SpaceBetweenFlex } from "../../../globalStyles";
import {
  MediumTypography,
  TitleTypography,
} from "../../../elements/textElement/fonts/Fonts";
import { useRecoilValue } from "recoil";
import { MainColorSelector } from "../../../recoil/ThemeSelectors";
import SimpleTable from "../../../components/SimpleTable/SimpleTable";
import {
  NotificationHeaderData,
  NotificationTableData,
} from "./DashboardNotificationsData";

const DashboardNotifications = () => {
  const { secondaryColor } = useRecoilValue(MainColorSelector);
  const actions = [
    { text: "Filter 1", action: () => console.log("Filter 1 selected") },
    { text: "Filter 2", action: () => console.log("Filter 2 selected") },
  ];
  const DataSlice = NotificationTableData.slice(0, 5);
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        minWidth: "30rem",
      }}
    >
      <SimpleTable
        data={DataSlice}
        Header={NotificationHeaderData}
        title="Notifications"
        actions={actions}
      />
    </div>
  );
};

export default DashboardNotifications;
