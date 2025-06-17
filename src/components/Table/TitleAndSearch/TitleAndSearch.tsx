import React from "react";
import {
  TitleAndSearchAndRefresh,
  TitleAndSearchContainer,
  TitleAndSearchRefreshContainer,
} from "./TitleAndSearch.style";
import {
  TitleTypography,
  Typography,
} from "../../../elements/textElement/fonts/Fonts";
import SearchInput from "../../../elements/Inputs/SearchInput/SearchInput";
import { SvgExpandIcon, SvgRefreshIcon } from "../../../elements/Icons";
import { useTranslation } from "react-i18next";
import useResponsive from "../../../hooks/useResponsive";

//  Interface for TitleAndSearch component props.
interface TitleAndSearchInterface {
  /**
   * The title text displayed at the top of the component.
   */
  title: string;

  /**
   * The current value of the search input.
   */
  value: string;

  /**
   * Callback triggered when the search input value changes.
   * @param e - The change event for the input field.
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Callback triggered when the refresh button is clicked.
   */
  RefreshClick: () => void;
  ExpandClick?: () => void;
  showExpand?: boolean;
  setShowExpand?: React.Dispatch<React.SetStateAction<boolean>>;
}

const TitleAndSearch = ({
  title,
  value,
  onChange,
  RefreshClick,
  showExpand,
  ExpandClick,
}: TitleAndSearchInterface) => {
  const { t } = useTranslation();
  const isMobile = useResponsive(600);
  return (
    <TitleAndSearchContainer>
      <Typography text={t(title)} fontWeight="700" lineHeight="120%" />
      <TitleAndSearchAndRefresh>
        <SearchInput
          value={value}
          onChange={onChange}
          width={isMobile ? "45vw" : "20rem"}
        />
        <TitleAndSearchRefreshContainer onClick={RefreshClick}>
          <SvgRefreshIcon className="IconTable" />
        </TitleAndSearchRefreshContainer>
        {!showExpand && (
          <TitleAndSearchRefreshContainer onClick={ExpandClick}>
            <SvgExpandIcon className="IconStrokeTable" />
          </TitleAndSearchRefreshContainer>
        )}
      </TitleAndSearchAndRefresh>
    </TitleAndSearchContainer>
  );
};

export default TitleAndSearch;
