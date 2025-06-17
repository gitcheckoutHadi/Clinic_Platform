import React from "react";
import { RowCheck } from "./CheckWithSvgStyle";
import { MediumTypography } from "../../textElement/fonts/Fonts";

interface CheckWithSvgInterface {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  name: string; // Name for form compatibility
  disabled?: boolean; // Optional disabled prop
}

const CheckWithSvg = ({
  state,
  setState,
  text,
  name,
  disabled = false,
}: CheckWithSvgInterface) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (!disabled) setState(!state);
    }
  };

  return (
    <RowCheck
      onClick={() => !disabled && setState(!state)}
      onKeyDown={handleKeyPress}
      $isUnchecked={!state}
      role="checkbox"
      aria-checked={state}
      tabIndex={disabled ? -1 : 0} // Allows keyboard focus
      aria-disabled={disabled}
    >
      {/* Hidden Input for Form Submission */}
      <input
        type="checkbox"
        name={name}
        value={text}
        checked={state}
        hidden
        readOnly
      />

      <MediumTypography
        text={text}
        fontWeight="400"
        color={state ? "#898DDA" : ""}
      />
      {!state ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
        >
          <circle cx="6.20898" cy="6" r="5.5" stroke="#CCCCCC" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
        >
          <circle cx="6.20898" cy="6" r="5.5" stroke="#231D46" />
          <circle cx="6.20898" cy="6" r="3" fill="#231D46" />
        </svg>
      )}
    </RowCheck>
  );
};

export default CheckWithSvg;
