import React from "react";
import {
  ItemContTimePaginated,
  RenderContTimePaginated,
} from "./TimePaginatedStyle";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";
interface TimePaginatedInterface {
  data: any[];
  value: string;
  onChange: (optionValue: string) => void;
}
const TimePaginated = ({ data, value, onChange }: TimePaginatedInterface) => {
  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
  };
  return (
    <RenderContTimePaginated>
      {data &&
        data.map((item, index) => (
          <ItemContTimePaginated
            key={index}
            active={item.value === value}
            onClick={() => handleOptionClick(item.value)}
          >
            <MediumTypography
              text={item.label}
              color="inherit"
              fontWeight="700"
              lineHeight="120%"
            />
          </ItemContTimePaginated>
        ))}
    </RenderContTimePaginated>
  );
};

export default TimePaginated;
