import { useRecoilValue } from "recoil";
import TextElement from "../TextElement";
import { FontProps } from "./FontsInterface";
import { MainColorSelector } from "../../../recoil/ThemeSelectors";

// TitleTypography is used for container  Title Typography
export function TitleTypography({
  text,
  letter_spacing,
  fontSize = "1.5rem",
  lineHeight = "2rem",

  fontWeight = "400",
  color,
  cursor,
  opacity,
  whiteSpace,
}: FontProps) {
  const { mainColor } = useRecoilValue(MainColorSelector);

  return (
    <TextElement
      tag="p"
      text={text}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color ? color : mainColor}
      letter_spacing={letter_spacing}
      fontWeight={fontWeight}
      cursor={cursor}
      opacity={opacity}
      whiteSpace={whiteSpace}
    />
  );
}

export function Typography({
  opacity,
  text,
  letter_spacing = "0.03125rem",
  fontSize = "1rem",
  lineHeight = "1.5rem",
  color,
  fontWeight = "400",
  cursor,
  whiteSpace,
}: FontProps) {
  const { mainColor } = useRecoilValue(MainColorSelector);
  return (
    <TextElement
      opacity={opacity}
      tag="p"
      text={text}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color ? color : mainColor}
      letter_spacing={letter_spacing}
      fontWeight={fontWeight}
      cursor={cursor}
      wordWrap="nowrap"
      whiteSpace={whiteSpace}
    />
  );
}

export function MediumTypography({
  text,
  letter_spacing,
  fontSize = "0.875rem",
  lineHeight,
  fontWeight = "400",
  color,
  cursor,
  opacity,
  wordWrap,
  whiteSpace,
  onClick,
}: FontProps) {
  const { mainColor } = useRecoilValue(MainColorSelector);
  return (
    <TextElement
      tag="p"
      text={text}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color ? color : mainColor}
      letter_spacing={letter_spacing}
      fontWeight={fontWeight}
      cursor={cursor}
      opacity={opacity}
      whiteSpace={whiteSpace}
      wordWrap={wordWrap}
      onClick={onClick}
    />
  );
}
