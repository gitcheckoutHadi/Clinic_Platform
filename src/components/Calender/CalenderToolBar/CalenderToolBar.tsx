import React from "react";
import {
  CalenderToolBarSpaceContainer,
  CalenderToolBarMainContainer,
  CalenderToolBarGapedRow,
  CalenderToolBarDayPagination,
} from "./CalenderToolBar.style";
import { Typography } from "../../../elements/textElement/fonts/Fonts";
import ColoredButton from "../../../elements/Buttons/ColoredButton/ColoredButton";
import { SvgAddIcon, SvgCalendarArrow } from "../../../elements/Icons";
import SimpleDropDown from "../../../elements/Inputs/SimpleDropDown/SimpleDropDown";
import { OptionInterface } from "../../../Interface/options/option";
import { NavigateAction } from "react-big-calendar";
import { useTranslation } from "react-i18next";
import { TransformDirection } from "../../../utils/Direction";
import TimePaginated from "../TimePaginated/TimePaginated";
import TableButtons from "../../../elements/Buttons/TableButtons/TableButtons";
import { PointerContainer } from "../../../globalStyles";

export interface CustomCalendarToolbarProps {
  label?: string;
  onNavigate?: (action: NavigateAction, date?: Date) => void;
  propView?: string;
  onView?: (view: "month" | "week" | "day") => void;
}

const CalenderToolBar: React.FC<CustomCalendarToolbarProps> = ({
  label,
  onNavigate,
  onView,
  propView = "week",
}) => {
  const handleViewChange = (selectedView: string) => {
    if (onView) {
      onView(selectedView as "month" | "week" | "day");
    }
  };

  // const DaysOptions: OptionInterface[] = [
  //   { value: "day", label: "Appointments.Day" },
  //   { value: "week", label: "Appointments.Week" },
  //   { value: "month", label: "Appointments.Month" },
  // ];
  const DaysOptions: OptionInterface[] = [
    { value: "day", label: "Daily" },
    { value: "week", label: "Week" },
    { value: "month", label: "Month" },
  ];
  const { t } = useTranslation();
  return (
    <CalenderToolBarMainContainer>
      <CalenderToolBarSpaceContainer>
        <CalenderToolBarGapedRow gap="0.62rem">
          <Typography
            text={label}
            fontSize="1.25rem"
            fontWeight="700"
            lineHeight="120%"
          />{" "}
          <PointerContainer onClick={() => onNavigate?.("PREV")}>
            <SvgCalendarArrow
              style={{
                transform:
                  TransformDirection() === "ltr" ? "rotate(180deg)" : "0",
              }}
            />
          </PointerContainer>
          <PointerContainer onClick={() => onNavigate?.("NEXT")}>
            <SvgCalendarArrow
              style={{
                transform: TransformDirection() === "ltr" ? "0" : "0",
              }}
            />{" "}
          </PointerContainer>
        </CalenderToolBarGapedRow>
        <CalenderToolBarGapedRow gap="1rem">
          <TimePaginated
            value={propView}
            onChange={handleViewChange}
            data={DaysOptions}
          />
        </CalenderToolBarGapedRow>
      </CalenderToolBarSpaceContainer>
      <CalenderToolBarSpaceContainer>
        <CalenderToolBarDayPagination>
          <button onClick={() => onNavigate?.("TODAY")}>
            {t("Appointments.Today")}
          </button>
        </CalenderToolBarDayPagination>
        <TableButtons text={"Add new appointment"} />
      </CalenderToolBarSpaceContainer>
    </CalenderToolBarMainContainer>
  );
};

export default CalenderToolBar;
