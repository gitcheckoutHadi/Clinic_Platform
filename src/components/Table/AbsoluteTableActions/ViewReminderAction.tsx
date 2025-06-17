import { useNavigate } from "react-router-dom";
import {
  SvgEdit,
  SvgEye,
  SvgReminderIcon,
  SvgTrash,
  SvgViewProfile,
} from "../../../elements/Icons";
import { Action } from "../TableInterface";
import { useState } from "react";

export const ViewReminderAction = (): Action[] => {
  const navigate = useNavigate();

  return [
    {
      text: "Send reminder",
      value: "SendReminder",
      icon: SvgReminderIcon,
      stroke: true,
      fill: false,
      hoverStroke: true,
      hoverFill: false,

      onClick: (sourceId: any) => {
        // navigate(`view/${sourceId}`);
        alert(`Send reminder ${sourceId}`);
      },
    },

    {
      text: "View Profile",
      value: "View profile",
      icon: SvgViewProfile,
      stroke: true,
      fill: false,
      hoverStroke: false,
      hoverFill: true,
      onClick: (sourceId: any) => {
        // navigate(`/PatientsList/view/${sourceId}`);
        alert(`View profile ${sourceId}`);
      },
    },
  ];
};
