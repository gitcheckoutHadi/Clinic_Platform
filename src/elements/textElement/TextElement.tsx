import React, { FC } from "react";
import { TextElementProps } from "./TextElementInterface";
import { themeColors } from "../../recoil/ThemeSelectors";

const TextElement: FC<TextElementProps> = ({
  opacity,
  tag,
  text,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  wordWrap,
  whiteSpace,
  color,
  overflowWrap,
  fontStyle,
  cursor,
  letter_spacing,
  onClick, // ✅ Correctly included
}) => {
  const style: React.CSSProperties = {
    fontSize: fontSize || "1rem",
    fontFamily: fontFamily || "Primary Font",
    fontWeight: fontWeight || "400",
    lineHeight: lineHeight || "normal",

    overflow: "hidden",
    textOverflow: "ellipsis",
    color: color || themeColors.light.primary_text_color,
    opacity: opacity,
    cursor: cursor || "inherit",
    fontStyle: fontStyle || "normal",
    letterSpacing: letter_spacing || "",
    overflowWrap:
      (overflowWrap as React.CSSProperties["overflowWrap"]) || "normal",
    wordWrap: (wordWrap as React.CSSProperties["wordWrap"]) ?? undefined,
    whiteSpace: (whiteSpace as React.CSSProperties["whiteSpace"]) || "normal",
  };

  // ✅ Pass `onClick` separately so the event is properly handled
  return React.createElement(
    tag,
    { style, onClick: onClick || undefined },
    text
  );
};

export default TextElement;
