import { useNavigate } from "react-router-dom";
import { SvgEdit, SvgTrash } from "../../../elements/Icons";
import { Action } from "../TableInterface";

export const EditDeleteActions = (): Action[] => {
  const navigate = useNavigate();

  return [
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
      fill: true,
      icon: SvgTrash,
      onClick: (sourceId: any) => {
        alert(`Delete profile ${sourceId}`);
      },
      stroke: true,
    },
  ];
};
