import React, { useState, useRef, useEffect, FC } from "react";

import "./TimePicker.css";

import { useRecoilValue } from "recoil";

import { SvgClockIcon } from "../../Icons";
import {
  DisplayedContainer,
  DivGroup,
  Dropdown,
  Input,
  InputCont,
  InputContSvg,
  NumInput,
  PrevHourMinute,
  TimeCont,
  TimePickerContainer,
  TimeTextContainer,
} from "./TimePicker.style";
import { MediumTypography, Typography } from "../../textElement/fonts/Fonts";
import { TimePickerProps } from "./TimePickerInterface";

const TimePickerComponent: FC<TimePickerProps> = ({
  width,
  height,
  placeholder,
  value,
  TPHeight,
  borderColor,
  padding,
  margin,
  absoleteBgColor,
  onChange = () => {},
  text,
}) => {
  const [time, setTime] = useState("12:00 AM");
  const [tempTime, setTempTime] = useState("12:00 AM");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        event.target instanceof Element &&
        !inputRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  useEffect(() => {
    setTime(value);
    // setTempTime(value);
  }, [value]);

  const toggleDropdown = () => {
    setTempTime(time);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const updateInputValue = () => {
    setTime(tempTime);
    closeDropdown();
    onChange(tempTime);
  };

  const getPrevHour = (hours: number) => {
    return hours === 1 ? 12 : hours - 1;
  };

  const getNextHour = (hours: number) => {
    return hours === 12 ? 1 : hours + 1;
  };

  const getPrevMinute = (minutes: number) => {
    return minutes === 0 ? 59 : minutes - 1;
  };

  const getNextMinute = (minutes: number) => {
    return minutes === 59 ? 0 : minutes + 1;
  };

  const increaseHours = () => {
    let [hours, minutesPeriod] = tempTime.split(":");
    let [minutes, period] = minutesPeriod.split(" ");
    let hour = parseInt(hours);
    hour = (hour % 12) + 1;
    if (hour === 12) period = period === "AM" ? "PM" : "AM";
    setTempTime(`${String(hour).padStart(2, "0")}:${minutes} ${period}`);
  };

  const decreaseHours = () => {
    let [hours, minutesPeriod] = tempTime.split(":");
    let [minutes, period] = minutesPeriod.split(" ");
    let hour = parseInt(hours);
    hour = hour === 1 ? 12 : hour - 1;
    if (hour === 11) period = period === "AM" ? "PM" : "AM";
    setTempTime(`${String(hour).padStart(2, "0")}:${minutes} ${period}`);
  };

  const increaseMinutes = () => {
    let [hours, minutesPeriod] = tempTime.split(":");
    let [minutes, period] = minutesPeriod.split(" ");
    let minute = parseInt(minutes);
    minute = (minute + 1) % 60;
    if (minute === 0) increaseHours();
    setTempTime(`${hours}:${String(minute).padStart(2, "0")} ${period}`);
  };

  const decreaseMinutes = () => {
    let [hours, minutesPeriod] = tempTime.split(":");
    let [minutes, period] = minutesPeriod.split(" ");
    let minute = parseInt(minutes);
    minute = (minute - 1 + 60) % 60;
    if (minute === 59) decreaseHours();
    setTempTime(`${hours}:${String(minute).padStart(2, "0")} ${period}`);
  };

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHours = parseInt(e.target.value, 10);
    if (!isNaN(newHours) && newHours >= 1 && newHours <= 12) {
      let [hours, minutesPeriod] = tempTime.split(":");
      let [minutes, period] = minutesPeriod.split(" ");
      setTempTime(`${String(newHours).padStart(2, "0")}:${minutes} ${period}`);
    }
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMinutes = parseInt(e.target.value, 10);
    if (!isNaN(newMinutes) && newMinutes >= 0 && newMinutes <= 59) {
      let [hours, minutesPeriod] = tempTime.split(":");
      let [minutes, period] = minutesPeriod.split(" ");
      setTempTime(`${hours}:${String(newMinutes).padStart(2, "0")} ${period}`);
    }
  };

  const togglePeriod = () => {
    let [hours, minutesPeriod] = tempTime.split(":");
    let [minutes, period] = minutesPeriod.split(" ");
    period = period === "AM" ? "PM" : "AM";
    setTempTime(`${hours}:${minutes} ${period}`);
  };

  const [hours, minutesPeriod] = tempTime.split(":");
  const [minutes, period] = minutesPeriod.split(" ");
  const hour = parseInt(hours);
  const minute = parseInt(minutes);

  useEffect(() => {
    if (!isDropdownOpen) {
      updateInputValue();
    }
  }, [isDropdownOpen]);

  const handleScrollHours = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY < 0) {
      decreaseHours();
    } else {
      increaseHours();
    }
  };
  const handleScrollMinutes = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY < 0) {
      decreaseMinutes();
    } else {
      increaseMinutes();
    }
  };

  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    if (isDropdownOpen) {
      document.addEventListener("wheel", preventScroll, { passive: false });
      document.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    }

    return () => {
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, [isDropdownOpen]);

  return (
    <InputCont ref={inputRef} errorValue={borderColor}>
      <TimeTextContainer>
        <MediumTypography
          //   color={inputTitleColor}
          text={text}
          fontSize="0.875rem"
        />
      </TimeTextContainer>
      <DisplayedContainer
        // bgColor={absoleteBgColor}
        // color={textInputColor}
        onClick={toggleDropdown}
      >
        <Typography
          //   text={
          //     value
          //       ? `${translateNumbersDigit(t, value.slice(0, -3))} ${
          //           value.includes("PM")
          //             ? t("notification.PM")
          //             : t("notification.AM")
          //         }`
          //       : time
          //   }
          text={value ? value : time}
        />

        <InputContSvg>{/* <SvgClockIcon /> */}</InputContSvg>
      </DisplayedContainer>
      <Input
        // color={textInputColor}
        type="text"
        value={value}
        readOnly
        onClick={toggleDropdown}
        placeholder={placeholder}
        width={width}
        height={height}
        padding={padding}
        margin={margin}
      />

      {isDropdownOpen && (
        <Dropdown>
          <TimePickerContainer
            // boxShadow={boxShadow}
            // bgColor={Box_bgColor}
            height={TPHeight}
          >
            <TimeCont>
              <DivGroup onWheel={handleScrollHours}>
                <PrevHourMinute
                  //  theme={theme}
                  onClick={decreaseHours}
                >
                  {/* {toArabicDigits(
                    getPrevHour(hour).toString().padStart(2, "0")
                  )} */}
                  {getPrevHour(hour).toString().padStart(2, "0")}
                </PrevHourMinute>
                <NumInput
                  //   color={textInputColor}
                  //   bgColor={timePickerFieldBgColor}
                  type="text"
                  className="num-input"
                  min="1"
                  max="12"
                  value={hour.toString().padStart(2, "0")}
                  //   value={toArabicDigits(hour.toString().padStart(2, "0"))}

                  onChange={handleHoursChange}
                />
                <PrevHourMinute
                  //  theme={theme}
                  onClick={increaseHours}
                >
                  {getNextHour(hour).toString().padStart(2, "0")}
                  {/* {toArabicDigits(
                    getNextHour(hour).toString().padStart(2, "0")
                  )} */}
                </PrevHourMinute>
              </DivGroup>
              <MediumTypography text=":" fontSize="0.75rem" />
              <DivGroup onWheel={handleScrollMinutes}>
                <PrevHourMinute
                  // theme={theme}
                  onClick={decreaseMinutes}
                >
                  {getPrevMinute(minute).toString().padStart(2, "0")}
                  {/* {toArabicDigits(
                    getNextMinute(minute).toString().padStart(2, "0")
                  )} */}
                </PrevHourMinute>
                <NumInput
                  //   color={textInputColor}
                  //   bgColor={timePickerFieldBgColor}
                  type="text"
                  className="num-input"
                  min="0"
                  max="59"
                  value={minute.toString().padStart(2, "0")}
                  //   value={toArabicDigits(minute.toString().padStart(2, "0"))}
                  onChange={handleMinutesChange}
                />
                <PrevHourMinute
                  //  theme={theme}
                  onClick={increaseMinutes}
                >
                  {getNextMinute(minute).toString().padStart(2, "0")}
                </PrevHourMinute>
              </DivGroup>
            </TimeCont>
            <DivGroup style={{ gap: "0.62rem" }}>
              <div
                onClick={() => setTempTime(`${hours}:${minutes} AM`)}
                style={{
                  cursor: "pointer",
                  color: period === "AM" ? "#5DD3B3" : "#AAB1B9",
                }}
              >
                {/* <Typography text={t("notification.AM")} /> */}
                <Typography text={"AM"} />
              </div>
              <div
                onClick={() => setTempTime(`${hours}:${minutes} PM`)}
                style={{
                  cursor: "pointer",
                  color: period === "PM" ? "#5DD3B3" : "#AAB1B9",
                }}
              >
                {/* <Typography text={t("notification.PM")} /> */}
                <Typography text={"PM"} />
              </div>
            </DivGroup>
          </TimePickerContainer>
        </Dropdown>
      )}
    </InputCont>
  );
};

export default TimePickerComponent;
