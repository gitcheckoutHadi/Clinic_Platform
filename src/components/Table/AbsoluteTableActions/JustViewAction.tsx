import { useNavigate } from "react-router-dom";

import { Action } from "../TableInterface";
import { SvgEye } from "../../../elements/Icons";

export const JustViewAction = (): Action[] => {
  const navigate = useNavigate();

  return [
    {
      text: "View Profile",
      value: "View profile",
      icon: SvgEye,
      stroke: true,
      fill: false,
      hoverStroke: false,
      hoverFill: true,
      onClick: (sourceId: any) => {
        navigate(`${sourceId}`);
        // alert(`View profile ${sourceId}`);
      },
    },
  ];
};
