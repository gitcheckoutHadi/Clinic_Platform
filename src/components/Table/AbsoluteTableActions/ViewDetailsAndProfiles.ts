import { useNavigate } from "react-router-dom";
import {
  SvgEdit,
  SvgEye,
  SvgTrash,
  SvgViewProfile,
} from "../../../elements/Icons";
import { Action } from "../TableInterface";

export const ViewDetailsAndProfiles = (): Action[] => {
  const navigate = useNavigate();

  return [
    {
      text: "View Details",
      value: "showpupup",
      icon: SvgEye,
      fill: true,
      onClick: (sourceId: any) => {
        // alert(`Edit profile ${sourceId}`);
      },
    },
    {
      text: "View Profile",
      value: "ViewProfile",
      icon: SvgViewProfile,
      stroke: false,
      fill: true,
      onClick: (sourceId: any) => {
        navigate(`view/${sourceId}`);
        // alert(`Delete profile ${sourceId}`);
      },
    },
  ];
};
