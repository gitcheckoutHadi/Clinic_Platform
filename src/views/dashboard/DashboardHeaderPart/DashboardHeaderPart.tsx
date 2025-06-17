import React, { useState, useEffect } from "react";
import {
  BTNDashboardExport,
  DashboardHeaderPartInfoCon,
  DashboardHeaderPartMainContainer,
} from "./DashboardHeaderPart.style";
import {
  MediumTypography,
  TitleTypography,
} from "../../../elements/textElement/fonts/Fonts";
import TableButtons from "../../../elements/Buttons/TableButtons/TableButtons";
import { useTranslation } from "react-i18next";
import { SvgExport } from "../../../elements/Icons";
interface DashboardHeaderPartInterface {
  title?: string;
  ExportClick?: () => void;
}
const DashboardHeaderPart = ({
  title,
  ExportClick,
}: DashboardHeaderPartInterface) => {
  const ClinkData = {
    ClinkName: "LAU",
  };

  // Function to get the formatted date/time
  const formatDateTime = () => {
    const date = new Date();
    return date
      .toLocaleString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .replace(",", " |");
  };

  // State to hold the formatted date/time
  const [currentTime, setCurrentTime] = useState(formatDateTime());

  // Update the time every minute
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(formatDateTime());
    }, 60000); // 60,000 ms = 1 minute

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const { t } = useTranslation();

  return (
    <DashboardHeaderPartMainContainer>
      <TitleTypography
        text={
          title ||
          `${ClinkData.ClinkName}  Clinic Intelligent Health Management Portal`
        }
        fontWeight="700"
        lineHeight="120%"
      />
      <DashboardHeaderPartInfoCon>
        <MediumTypography
          text={currentTime} // Display the updated time
          lineHeight="120%"
          fontSize="0.875rem"
          fontWeight="400"
        />
        {/* <TableButtons text={t("sidebar.Export")} /> */}
        <BTNDashboardExport onClick={ExportClick}>
          <SvgExport />
          <MediumTypography
            text={t("sidebar.Export")}
            fontWeight="400"
            lineHeight="120%"
          />
        </BTNDashboardExport>
      </DashboardHeaderPartInfoCon>
    </DashboardHeaderPartMainContainer>
  );
};

export default DashboardHeaderPart;
