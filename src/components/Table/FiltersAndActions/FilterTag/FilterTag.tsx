import React from "react";
import { ClearFilter, TagHolder } from "./FilterTag.style";
import { MediumTypography } from "../../../../elements/textElement/fonts/Fonts";
import { tagButtonInterface } from "./FilterTagInterface";
import { SvgCloseIcon } from "../../../../elements/Icons";

const FilterTag = ({
  text,
  filteredText,
  onClickFunction,
  width,
  height,
  backgroundcolor,
  color,
  border,
  deleteClick,
}: tagButtonInterface) => {
  return (
    <TagHolder
      onClick={onClickFunction}
      width={width}
      height={height}
      bgcolor={backgroundcolor}
      color={color}
      border={border?.toString()}
      filteredText={filteredText}
    >
      <MediumTypography
        text={`${text} ${filteredText ? ":" : ""}`}
        fontSize="0.875rem"
        color="inherit"
        fontWeight="700" ///don't change
        lineHeight="1.25rem"
        letter_spacing="0.00625rem"
        cursor="pointer"
      />
      <MediumTypography
        text={filteredText || ""}
        fontSize="0.875rem"
        color="inherit"
        fontWeight="400" ///don't change
        lineHeight="1.25rem"
        letter_spacing="0.00625rem"
        cursor="pointer"
      />
      <ClearFilter
        onClick={(e) => {
          e.stopPropagation(); // Prevents triggering parent onClick
          deleteClick?.();
        }}
      >
        <SvgCloseIcon width={20} className="iconClose" />
      </ClearFilter>
    </TagHolder>
  );
};

export default FilterTag;
