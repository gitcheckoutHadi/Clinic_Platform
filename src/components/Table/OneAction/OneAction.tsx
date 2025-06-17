import React from "react";
import { AbsoluteTableActionsProps } from "../AbsoluteTableActions/AbsoluteTableActions";
import { MainOneActionContainer, MainOneActionText } from "./OneAction.style";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";
import { SvgEye } from "../../../elements/Icons";

const OneAction = ({
  actions,
  sourceId,
  handleDeleteExtraFunction,
  Icon,
}: AbsoluteTableActionsProps) => {
  console.log("actions", actions);
  return (
    <>
      {actions &&
        actions.map((action, index) => (
          <MainOneActionContainer
            key={index}
            onClick={() => {
              if (action.onClick) {
                action.onClick(sourceId);
              }
            }}
          >
            {action.icon && React.createElement(action.icon)}

            <MainOneActionText>
              <MediumTypography
                text={`${action.text} `}
                color="inherit"
                fontSize="0.75rem"
                whiteSpace="nowrap"
              />
            </MainOneActionText>
          </MainOneActionContainer>
        ))}
    </>
  );
};

export default OneAction;
