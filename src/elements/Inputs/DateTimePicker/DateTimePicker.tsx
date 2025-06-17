import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  MainDatePickerContainer,
  TitleDatePickerContainer,
} from "./DateTimePicker.style";
import { MediumTypography } from "../../textElement/fonts/Fonts";
import { useTranslation } from "react-i18next";

interface DateTimePickerProps {
  text: string;
  value?: Date; // The selected date
  minDate?: Date; // Minimum selectable date
  maxDate?: Date; // Maximum selectable date
  dateFormat?: string; // Date and time format
  onChange: (date: Date | null) => void; // Change handler
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  text,
  value = new Date(),
  minDate,
  maxDate,
  dateFormat = "dd/MM/yyyy",
  onChange,
}) => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<Date | null>(value);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const datePickerRef = useRef<DatePicker>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onChange(date);
  };

  const handleContainerClick = () => {
    if (datePickerRef.current) {
      // Programmatically focus the date picker to open the selector
      datePickerRef.current.setFocus();
    }
  };

  return (
    <MainDatePickerContainer ref={containerRef} onClick={handleContainerClick}>
      <DatePicker
        ref={datePickerRef}
        selected={selectedDate}
        onChange={handleDateChange}
        timeIntervals={15}
        dateFormat={dateFormat}
        minDate={minDate}
        maxDate={maxDate}
        className="custom-datepicker-input"
        placeholderText="Select a date"
      />
      <TitleDatePickerContainer>
        <MediumTypography
          text={t(text)}
          lineHeight="1rem"
          letter_spacing="0.025rem"
        />
      </TitleDatePickerContainer>
    </MainDatePickerContainer>
  );
};

export default DateTimePicker;
