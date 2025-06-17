import React from "react";
import {
  AbsoluteTableActionsCells,
  AbsoluteTableActionsContainer,
} from "./AbsoluteTableActions.style";
import { Action } from "../TableInterface";
import {
  MediumTypography,
  Typography,
} from "../../../elements/textElement/fonts/Fonts";
import { DummyActions } from "./DummyActions";
import { useTranslation } from "react-i18next";

export interface AbsoluteTableActionsProps {
  text?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  actions?: Action[];
  sourceId: string;
  handleDeleteExtraFunction: () => void;
  handleRemiNderFunction?: () => void;
  handleShowNormalPup?: () => void;
}

const AbsoluteTableActions = ({
  actions = DummyActions(),
  sourceId,
  handleDeleteExtraFunction,
  handleRemiNderFunction,
  handleShowNormalPup,
}: AbsoluteTableActionsProps) => {
  const { t } = useTranslation();
  return (
    <AbsoluteTableActionsContainer>
      {actions &&
        actions.map((action, index) => (
          <AbsoluteTableActionsCells
            fill={action.fill}
            stroke={action.stroke}
            hoverFill={action.hoverFill}
            hoverStroke={action.hoverStroke}
            key={index}
            onClick={() => {
              if (action.value.toLocaleLowerCase() === "Reminder") {
                handleRemiNderFunction && handleRemiNderFunction();
              }
              if (action.value.toLocaleLowerCase() === "delete") {
                handleDeleteExtraFunction();
              }
              if (action.value.toLocaleLowerCase() === "showpupup") {
                handleShowNormalPup && handleShowNormalPup();
              }
              if (action.onClick) {
                action.onClick(sourceId);
              }
            }}
          >
            {React.createElement(action.icon, { className: "icon-style" })}

            <MediumTypography
              text={t(`general.${action.text}`)}
              color="inherit"
              fontWeight="700"
              cursor="pointer"
            />
          </AbsoluteTableActionsCells>
        ))}
    </AbsoluteTableActionsContainer>
  );
};

export default AbsoluteTableActions;
