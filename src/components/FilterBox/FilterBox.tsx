import React, { useState } from "react";
import { TitleAndSearchFilterContainer } from "../Table/TitleAndSearch/TitleAndSearch.style";
import { SvgFilterIcon } from "../../elements/Icons";
import { FilterBoxPositionAbs } from "./FilterBox.style";
import TextBoxsFilters, {
  TextBoxsFiltersInterface,
} from "../TextBoxsFilters/TextBoxsFilters";
import useClickOutside from "../../hooks/useClickOutside";

const FilterBox = ({ actions }: TextBoxsFiltersInterface) => {
  const [showFilters, setShowFilters] = useState(false);
  const containerRef = useClickOutside(showFilters, () =>
    setShowFilters(false)
  );
  return (
    <TitleAndSearchFilterContainer
      ref={containerRef}
      onClick={() => setShowFilters(!showFilters)}
    >
      <SvgFilterIcon className="IconTable" />
      {showFilters && (
        <FilterBoxPositionAbs onClick={(e) => e.stopPropagation()}>
          <TextBoxsFilters actions={actions} />
        </FilterBoxPositionAbs>
      )}
    </TitleAndSearchFilterContainer>
  );
};

export default FilterBox;
