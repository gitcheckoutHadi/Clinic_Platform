import { JSX } from "react";

export interface TextElementProps {
  tag: keyof JSX.IntrinsicElements;
  text: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
  lineHeight?: string;
  whiteSpace?: string;
  wordWrap?: string;
  color?: string;
  overflowWrap?: string;
  fontStyle?: string;
  opacity?: string;
  cursor?: string;
  letter_spacing?: string;
  onClick?: () => void;
}
