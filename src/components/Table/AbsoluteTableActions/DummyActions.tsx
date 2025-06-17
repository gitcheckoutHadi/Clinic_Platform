import { useNavigate } from "react-router-dom";
import {
  SvgEdit,
  SvgEye,
  SvgTrash,
  SvgViewProfile,
} from "../../../elements/Icons";
import { Action } from "../TableInterface";

export const DummyActions = (): Action[] => {
  const navigate = useNavigate();

  return [
    {
      text: "View Profile",
      value: "View Profile",
      icon: SvgViewProfile,
      stroke: false,
      fill: true,
      hoverStroke: false,
      hoverFill: true,
      onClick: (sourceId: any) => {
        navigate(`view/${sourceId}`);
        // alert(`View profile ${sourceId}`);
      },
    },
    {
      text: "Edit",
      value: "Edit",
      icon: SvgEdit,
      fill: true,
      onClick: (sourceId: any) => {
        navigate(`edit/${sourceId}`);
        // alert(`Edit profile ${sourceId}`);
      },
    },
    {
      text: "Delete",
      value: "Delete",
      // fill: true,
      icon: SvgTrash,
      onClick: (sourceId: any) => {
        // alert(`Delete profile ${sourceId}`);
      },
      stroke: true,
    },
  ];
};
