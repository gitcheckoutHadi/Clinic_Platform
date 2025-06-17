import React, { FC } from "react";
import styled, { css } from "styled-components";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: "small" | "medium" | "large";
  onColor?: string;
  offColor?: string;
  handleColor?: string;
}

export const Switch: FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  size = "medium",
  onColor = "#231d46",
  offColor = "#ccc",
  handleColor = "#fff",
}) => {
  return (
    <SwitchContainer size={size}>
      <HiddenCheckbox
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <Slider
        size={size}
        onColor={onColor}
        offColor={offColor}
        handleColor={handleColor}
      />
    </SwitchContainer>
  );
};

// Styled Components

const sizeStyles = {
  small: {
    width: "40px",
    height: "20px",
    handle: {
      size: "16px",
      translateX: "20px",
    },
  },
  medium: {
    width: "60px",
    height: "34px",
    handle: {
      size: "26px",
      translateX: "26px",
    },
  },
  large: {
    width: "80px",
    height: "40px",
    handle: {
      size: "30px",
      translateX: "40px",
    },
  },
};

const SwitchContainer = styled.label<{ size: "small" | "medium" | "large" }>`
  position: relative;
  display: inline-block;
  width: ${(props) => sizeStyles[props.size].width};
  height: ${(props) => sizeStyles[props.size].height};
`;

const HiddenCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span<{
  size: "small" | "medium" | "large";
  onColor: string;
  offColor: string;
  handleColor: string;
}>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.offColor};
  transition: 0.4s;
  border-radius: 50px;

  &:before {
    position: absolute;
    content: "";
    height: ${(props) => sizeStyles[props.size].handle.size};
    width: ${(props) => sizeStyles[props.size].handle.size};
    left: 4px;
    bottom: 4px;
    background-color: ${(props) => props.handleColor};
    transition: 0.4s;
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }

  ${HiddenCheckbox}:checked + & {
    background-color: ${(props) => props.onColor};
  }

  ${HiddenCheckbox}:checked + &:before {
    transform: translateX(
      ${(props) => sizeStyles[props.size].handle.translateX}
    );
  }

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }

  &:active:before {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;
