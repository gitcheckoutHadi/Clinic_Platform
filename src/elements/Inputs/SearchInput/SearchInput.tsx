import React, { useState } from "react";
import { SearchInputContainer, SearchInputText } from "./SearchInput.style";
import { SvgSearchIcon } from "../../Icons";
import { useTranslation } from "react-i18next";

interface SearchInputInterface {
  width?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput = ({ width, value, onChange }: SearchInputInterface) => {
  const [Focus, setFocus] = useState(false);
  const { t } = useTranslation();
  return (
    <SearchInputContainer focused={Focus} width={width}>
      <SearchInputText
        type="text"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={value}
        onChange={onChange}
        placeholder={t("general.Search")}
      />
      <SvgSearchIcon fill={Focus ? "#231d46" : "#D3D3D3"} />
    </SearchInputContainer>
  );
};

export default SearchInput;
