import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TextInputPlace } from "../NewTextBox/NewTextBoxStyle";
import { MediumTypography } from "../../textElement/fonts/Fonts";
import { useTranslation } from "react-i18next";
import { breakpoints } from "../../../theme";

interface Styles {
  errorValue?: string;
  disabled?: boolean;
  hasValue?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.25rem;
  min-width: 28rem;
  @media (min-width: ${breakpoints.extraLarge}) {
    min-width: 40rem;
  }
  @media (min-width: ${breakpoints.BigMonitor}) {
    min-width: 32rem;
    /* padding: 3rem; */
  }

  @media (max-width: ${breakpoints.medium}) {
    min-width: 18rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Select = styled.select<Styles>`
  flex: 1;
  padding: 9px 20px;
  font-size: 0.875rem;
  font-weight: ${(props) => (props.hasValue ? "600" : "400")};
  border-radius: 0.3125rem;
  border: 1px solid ${(props) => (props.errorValue ? "#FF6B6B" : "transparent")};
  background: rgba(171, 174, 229, 0.1);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: ${(props) => `
  url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='16' height='16' fill='${
    props.hasValue ? "%23000" : "%23A6A6A6"
  }'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E")
`};

  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 16px;
  cursor: pointer;
  font-family: "Primary Font";
  color: ${(props) => (props.hasValue ? "inherit" : "#A6A6A6")};

  option {
    background: white;
    color: black;
    cursor: pointer;
  }

  option[value=""][disabled] {
    display: none;
  }

  &:focus {
    outline: none;
  }
`;

const Input = styled.input<Styles>`
  flex: 1;
  padding: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.3125rem;
  border: 1px solid ${(props) => (props.errorValue ? "#FF6B6B" : "transparent")};
  background: rgba(171, 174, 229, 0.1);
  color: ${(props) => (props.value ? "inherit" : "#A6A6A6")};

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 400;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

interface DOBPickerInterface {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  errorValue?: string;
  setErrorValue?: React.Dispatch<React.SetStateAction<string>>;
  mandatory?: boolean;
  text: string;
}

const DOBPicker: React.FC<DOBPickerInterface> = ({
  value,
  setValue,
  mandatory,
  errorValue,
  setErrorValue,
  text,
}) => {
  const { t } = useTranslation();
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (value) {
      const [dayValue, monthValue, yearValue] = value.split("-");
      if (dayValue && monthValue && yearValue) {
        setDay(dayValue);
        setMonth(monthValue);
        setYear(yearValue);
      }
    }
  }, [value]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = (month: string, year: number) => {
    if (!month) return 31;
    const monthIndex = months.indexOf(month);
    if (isNaN(year))
      return new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = e.target.value;
    setMonth(selectedMonth);
    validateDate(selectedMonth, day, year);
    updateValue(day, selectedMonth, year);
    setErrorValue && setErrorValue("");
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDay = e.target.value;
    setDay(selectedDay);
    validateDate(month, selectedDay, year);
    updateValue(selectedDay, month, year);
    setErrorValue && setErrorValue("");
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedYear = e.target.value;
    setYear(selectedYear);
    validateDate(month, day, selectedYear);
    updateValue(day, month, selectedYear);
    setErrorValue && setErrorValue("");
  };

  const validateDate = (month: string, day: string, year: string) => {
    if (month && day && year) {
      if (
        month === "February" &&
        parseInt(day) > (isLeapYear(parseInt(year)) ? 29 : 28)
      ) {
        setError(
          `February does not have more than ${
            isLeapYear(parseInt(year)) ? 29 : 28
          } days.`
        );
      } else if (
        ["April", "June", "September", "November"].includes(month) &&
        parseInt(day) > 30
      ) {
        setError(`${month} only has 30 days.`);
      } else {
        setError("");
      }
    }
  };

  const updateValue = (
    selectedDay: string,
    selectedMonth: string,
    selectedYear: string
  ) => {
    if (selectedDay && selectedMonth && selectedYear) {
      const formattedDate = `${selectedDay}-${selectedMonth}-${selectedYear}`;
      setValue(formattedDate);
    } else {
      setValue("");
    }
  };

  const days = Array.from(
    {
      length: daysInMonth(
        month,
        parseInt(year || new Date().getFullYear().toString())
      ),
    },
    (_, i) => i + 1
  );

  return (
    <Container>
      <TextInputPlace>
        <MediumTypography
          text={mandatory ? `${t(text)} *` : t(text)}
          color={errorValue ? `#FF6B6B` : "#A6A6A6"}
          fontWeight="400"
        />
      </TextInputPlace>
      <InputContainer>
        <Select
          errorValue={errorValue}
          value={month}
          onChange={handleMonthChange}
          hasValue={!!month}
        >
          <option value="" disabled selected style={{ color: "#A6A6A6" }}>
            Month
          </option>
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </Select>
        <Select
          errorValue={errorValue}
          value={day}
          onChange={handleDayChange}
          hasValue={!!day}
        >
          <option value="" disabled selected style={{ color: "#A6A6A6" }}>
            Day
          </option>
          {days.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </Select>
        <Input
          errorValue={errorValue}
          type="number"
          placeholder="Year"
          value={year}
          onChange={handleYearChange}
          min="1900"
          max={new Date().getFullYear()}
        />
      </InputContainer>
      {(error || errorValue) && (
        <ErrorMessage>{error || errorValue}</ErrorMessage>
      )}
    </Container>
  );
};

export default DOBPicker;
