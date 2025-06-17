import React from "react";

import { useRecoilValue } from "recoil";
import { TransformDirection } from "../../utils/Direction";
import { MainColorSelector } from "../../recoil/ThemeSelectors";
import { RadioLabel, RadioLine, SeletectOptinToogle } from "./Radio.style";

interface RadioInterface {
  value: string;
  onChange: any;
  checked: any;
  textLabel?: string;
}
const RadioButtonElement = ({
  value,
  onChange,
  checked,
  textLabel,
}: RadioInterface) => {
  const { buttonBgColor } = useRecoilValue(MainColorSelector);

  // console.log("Radio Values is", value);
  return (
    <RadioLine>
      <SeletectOptinToogle
        type="radio"
        id={value}
        value={value}
        name={value}
        onChange={onChange}
        checked={checked}
      />
      <RadioLabel
        dir={TransformDirection()}
        bgcolor={buttonBgColor}
        htmlFor={value}
      >
        {textLabel ? textLabel : value}
      </RadioLabel>
    </RadioLine>
  );
};

export default RadioButtonElement;
