import React, { useState } from "react";
import { NormalFlex, PageFlex } from "../../globalStyles";
import HeaderNavigator from "../../elements/headerNavigator/HeaderNavigator";
import SettingViewMode from "./SettingViewMode/SettingViewMode";
import SettingTable from "./SettingTable/SettingTable";
import SettingNotificationItem from "./SettingNotification/SettingNotificationItem/SettingNotificationItem";
import ClinicProfile from "./clinicProfile/ClinicProfile";
import { MainContOfSetting } from "./SettingViewMode/SettingViewMode.style";
import { Typography } from "../../elements/textElement/fonts/Fonts";

const Settings = () => {
  const [Views, setViews] = useState("UserManagement");

  // Helper function to render the view based on `Views`
  const renderViewContent = () => {
    switch (Views) {
      case "UserManagement":
        return <SettingTable />;
      case "ClinicProfileSettings":
        return <ClinicProfile />;
      // case "Notifications":
      //   return <SettingNotificationItem />;
      default:
        return <NormalFlex>No Content Available</NormalFlex>;
    }
  };

  return (
    <PageFlex>
      <Typography
        text={"Settings And Administration"}
        fontSize="1.5rem"
        fontWeight="700"
        lineHeight="120%"
      />
      <MainContOfSetting>
        <SettingViewMode viewMode={Views} setViewMode={setViews} />
        {/* Render the view content dynamically */}
        {renderViewContent()}
      </MainContOfSetting>
    </PageFlex>
  );
};

export default Settings;
