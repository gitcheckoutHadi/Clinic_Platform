import React from "react";
import { TagHolder } from "./FilterTag.style";
import { MediumTypography } from "../../../../elements/textElement/fonts/Fonts";
import { tagButtonInterface } from "./FilterTagInterface";

const FilterTag = ({
  text,
  onClickFunction,
  width,
  height,
  backgroundcolor,
  color,
  border,
}: tagButtonInterface) => {
  return (
    <TagHolder
      onClick={onClickFunction}
      width={width}
      height={height}
      bgcolor={backgroundcolor}
      color={color}
      border={border?.toString()}
    >
      <MediumTypography
        text={text}
        fontSize="0.875rem"
        color="inherit"
        fontWeight="700" ///don't change
        lineHeight="1.25rem"
        letter_spacing="0.00625rem"
        cursor="pointer"
      />
    </TagHolder>
  );
};

export default FilterTag;
