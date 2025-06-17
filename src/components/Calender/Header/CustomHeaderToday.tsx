import React from "react";
import { DateLocalizer } from "react-big-calendar";
import { format } from "date-fns";
import {
  TodayHeaderMainCony,
  TodayNumberHeaderMainCony,
} from "../CalenderStyle";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";

const CustomHeaderToday = ({
  date,
  localizer,
}: {
  date: Date;
  localizer: DateLocalizer;
}) => {
  return (
    <TodayHeaderMainCony>
      <MediumTypography
        text={format(date, "E").charAt(0)}
        fontWeight="700"
        lineHeight="120%"
        color="#fff"
      />

      {/* Circle with the day number */}
      <TodayNumberHeaderMainCony>
        <MediumTypography
          text={format(date, "d")}
          fontWeight="700"
          lineHeight="120%"
          color="#231D46"
        />
      </TodayNumberHeaderMainCony>
    </TodayHeaderMainCony>
  );
};

export default CustomHeaderToday;
