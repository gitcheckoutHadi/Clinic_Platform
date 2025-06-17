import React, { useState } from "react";
import { RenewalsLogData } from "./DSRenewalsLogData";
import {
  SvgEmbryos,
  SvgOOC,
  SvgSpermVails,
  SvgZygotes,
  SvgCircleTick,
  SvgCircleError,
} from "../../../elements/Icons";
import RenewalsLog from "../../../components/RenewalsLog/RenewalsLog";
import { DSEmptySpace } from "../Dashboard.style";

const DSRenewalsLog = () => {
  const colorPalette = [
    { id: 1, hex: "#FF6F61", icon: SvgOOC }, // Store the component itself
    { id: 3, hex: "#00BFA6", icon: SvgZygotes },
    { id: 2, hex: "#F39C12", icon: SvgSpermVails },
    { id: 6, hex: "#5DADE2", icon: SvgEmbryos },
  ];

  const fullData = RenewalsLogData.map((item, index) => ({
    label: item.label,
    value: item.value,
    color: colorPalette[index]?.hex,
    svg: colorPalette[index]?.icon, // Pass the component itself, not the instance
  }));

  const [visibleLabels, setVisibleLabels] = useState<string[]>(
    fullData.map((item) => item.label)
  );

  const toggleLabel = (label: string) => {
    setVisibleLabels(
      (prevLabels) =>
        prevLabels.includes(label)
          ? prevLabels.filter((l) => l !== label) // Hide if already visible
          : [...prevLabels, label] // Show if hidden
    );
  };

  const showAll = () => {
    setVisibleLabels(fullData.map((item) => item.label)); // Show all labels
  };

  const filteredData = fullData.filter((item) =>
    visibleLabels.includes(item.label)
  );

  const Actions = [
    {
      text: "All",
      action: showAll,
      Icon:
        visibleLabels.length === fullData.length
          ? SvgCircleTick
          : SvgCircleError,
    },
    ...fullData.map((item) => ({
      text: item.label,
      action: () => toggleLabel(item.label),
      Icon: visibleLabels.includes(item.label) ? SvgCircleTick : SvgCircleError,
    })),
  ];

  return (
    <DSEmptySpace>
      <RenewalsLog data={filteredData} actions={Actions} />
    </DSEmptySpace>
  );
};

export default DSRenewalsLog;
