import React from "react";
import MyCalendar from "../../components/Calender/Calender";
import HeaderNavigator from "../../elements/headerNavigator/HeaderNavigator";
import { useTranslation } from "react-i18next";
import { Typography } from "../../elements/textElement/fonts/Fonts";
import { PageFlex } from "../../globalStyles";

const Appointments = () => {
  return (
    <PageFlex>
      {/* <HeaderNavigator text={"general.Home"} /> */}
      <Typography
        text={"Appointments"}
        fontSize="1.5rem"
        fontWeight="700"
        lineHeight="120%"
      />
      <MyCalendar />
    </PageFlex>
  );
};

export default Appointments;
