import React from "react";
import {
  LabelTextBoxsFiltersContainer,
  MainTextBoxsFiltersContainer,
  IconWrapper,
} from "./TextBoxsFilters.style";
import { MediumTypography } from "../../elements/textElement/fonts/Fonts";

export interface TextBoxsFiltersInterface {
  actions?: {
    text: string;
    action: () => void;
    Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  }[];
}

const TextBoxsFilters = ({ actions }: TextBoxsFiltersInterface) => {
  return (
    <MainTextBoxsFiltersContainer>
      {actions &&
        actions.map((item, index) => (
          <LabelTextBoxsFiltersContainer key={index} onClick={item.action}>
            <MediumTypography
              text={item.text}
              color="inherit"
              cursor="pointer"
              whiteSpace="nowrap"
            />
            {item.Icon && (
              <IconWrapper className="icon-animation">
                <item.Icon />
              </IconWrapper>
            )}
          </LabelTextBoxsFiltersContainer>
        ))}
    </MainTextBoxsFiltersContainer>
  );
};

export default TextBoxsFilters;
