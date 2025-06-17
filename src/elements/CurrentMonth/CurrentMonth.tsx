import React, { useEffect, useState } from "react";
import { MediumTypography } from "../textElement/fonts/Fonts";

const CurrentMonth = () => {
  const formatDateTime = () => {
    const date = new Date();
    return date
      .toLocaleString("en-US", {
        month: "long",
        year: "numeric",
      })
      .replace(" ", ", ");
  };
  // State to hold the formatted date
  const [currentTime, setCurrentTime] = useState(formatDateTime());

  // Update the time every minute (optional, if you still need periodic updates)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(formatDateTime());
    }, 60000); // Updates every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <MediumTypography fontWeight="700" text={currentTime} color="#6A0DAD" />
    </>
  );
};

export default CurrentMonth;
