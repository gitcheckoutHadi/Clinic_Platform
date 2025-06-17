import React from "react";
import { DateLocalizer } from "react-big-calendar";
import { format } from "date-fns";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";

const CustomHeader = ({
  date,
  localizer,
}: {
  date: Date;
  localizer: DateLocalizer;
}) => {
  const dayLetter = format(date, "E").charAt(0); // Get first letter of day
  const dayNumber = format(date, "d"); // Get day number

  return (
    <div
      style={{
        textAlign: "center",

        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
        paddingTop: "0.75rem",
      }}
    >
      <MediumTypography
        text={dayLetter}
        color="#A6A6A6"
        fontWeight="400"
        lineHeight="120%"
      />
      <MediumTypography
        text={dayNumber}
        color="#231D46"
        fontWeight="400"
        lineHeight="120%"
      />

      {/* Day number with opacity */}
    </div>
  );
};

export default CustomHeader;
