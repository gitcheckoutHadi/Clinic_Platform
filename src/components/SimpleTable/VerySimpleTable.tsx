import React, { useState } from "react";
import { TableHeaderDataInterface } from "../../Interface/TableInterface/TableInterface";
import {
  SimpleTableActionCell,
  SimpleTableBody,
  SimpleTableBodyRow,
  SimpleTableCell,
  SimpleTableHeaderRow,
  SimpleTableMainContainer,
  SimpleTableTitleCont,
} from "./SimpleTable.style";
import {
  MediumTypography,
  TitleTypography,
  Typography,
} from "../../elements/textElement/fonts/Fonts";
import {
  PointerDotsContainer,
  TableRowCell,
} from "../Table/TableBody/TableBody.style";
import {
  TableBodyTextColor,
  TableBodyTextFontWeight,
  TableBodyTextLetterSpacing,
  TableBodyTextLineHeight,
} from "../Table/TableBody/functions";
import { PointerContainer, SpaceBetweenFlex } from "../../globalStyles";
import { useRecoilValue } from "recoil";
import { MainColorSelector } from "../../recoil/ThemeSelectors";
import { useNavigate } from "react-router-dom";
import ShadowBox from "../ShadowBox/ShadowBox";
import {
  SvgExpandIcon,
  SvgFilterIcon,
  SvgOptionDots,
} from "../../elements/Icons";
import {
  BTNRowsPaymentSummary,
  PaymentSummaryRowContainer,
} from "../PaymentSummaryV2/PaymentSummary.styled";
import {
  TitleAndSearchFilterContainer,
  TitleAndSearchRefreshContainer,
} from "../Table/TitleAndSearch/TitleAndSearch.style";
import FilterBox from "../FilterBox/FilterBox";
import TextBoxsFilters, {
  TextBoxsFiltersInterface,
} from "../TextBoxsFilters/TextBoxsFilters";
import { FilterBoxPositionAbs } from "../FilterBox/FilterBox.style";
import useClickOutside from "../../hooks/useClickOutside";
import { Action } from "../Table/TableInterface";
import MappedIndexClickOutSide from "../../hooks/MapedIndexClickOutSide";
import AbsoluteTableActions from "../Table/AbsoluteTableActions/AbsoluteTableActions";
import PopUp from "../PupUps/PopUp/PopUp";

interface SimpleTableInterface extends TextBoxsFiltersInterface {
  Action?: Action[];
  linkTo?: string;
  data: any[];
  Header: TableHeaderDataInterface[];
  flexWidths?: number[];
  minWidth?: string[];
  SecondArrayText?: string;
  RowAction?: () => void;
  handleViewDetailPopUp?: () => void;
  PopUpContent?: any;
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString(); // You can customize the date format as needed
};

const VerySimpleTable = ({
  Header,

  Action,
  data,
  SecondArrayText,

  flexWidths = [],
  minWidth = [],
  PopUpContent,
}: SimpleTableInterface) => {
  const { secondaryColor } = useRecoilValue(MainColorSelector);
  const navigate = useNavigate();
  const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);
  const [ObjectId, setObjectId] = useState<number | null>(null);
  const [ShowDeletePopUp, setShowDeletePopUp] = useState<boolean>(false);
  const [ShowPopUp, setShowPopUp] = useState<boolean>(false);
  const [showFilters, setShowFilters] = useState(false);
  const containerRef = useClickOutside(showFilters, () =>
    setShowFilters(false)
  );
  const toggleActionMenu = (index: number) => {
    setActiveRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const clickOutsideRef = MappedIndexClickOutSide(() =>
    setActiveRowIndex(null)
  );

  return (
    <>
      {" "}
      {ShowPopUp && (
        <PopUp
          showPopUp={ShowPopUp}
          setShowPopUp={setShowPopUp}
          title={`Patient Information`}
          content={<>{PopUpContent} </>}
        />
      )}
      <SimpleTableMainContainer>
        <SimpleTableHeaderRow>
          {Header.map((head, index) => (
            <SimpleTableCell
              flexWidth={flexWidths[index] || 1}
              minWidth={minWidth[index] || "5rem"}
              key={index}
            >
              <MediumTypography
                text={head.label}
                fontWeight="700"
                color="#898DDA"
              />
            </SimpleTableCell>
          ))}
          {Action && Action.length > 1 ? (
            <SimpleTableActionCell
              style={{ width: "2.2rem" }}
            ></SimpleTableActionCell>
          ) : null}
        </SimpleTableHeaderRow>
        <SimpleTableBody>
          {data.map((row, index) => (
            <SimpleTableBodyRow key={index}>
              {Header.map((column, colIndex) => {
                const cellData = row[Header[colIndex].id];

                return (
                  <SimpleTableCell
                    flexWidth={flexWidths[index] || 1}
                    minWidth={minWidth[index] || "5rem"}
                    key={colIndex}
                  >
                    {Array.isArray(cellData) ? (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {cellData.map((value: string, valueIndex: number) => (
                          <MediumTypography
                            key={valueIndex}
                            opacity={valueIndex > 0 ? "0.5" : "1"}
                            text={
                              valueIndex > 0 && SecondArrayText
                                ? `${SecondArrayText} ${value}`
                                : value
                            }
                          />
                        ))}
                      </div>
                    ) : (
                      <MediumTypography
                        text={
                          cellData instanceof Date
                            ? formatDate(cellData)
                            : cellData || "null"
                        }
                        fontWeight={"inherit"}
                        color={"inherit"}
                        lineHeight={"inherit"}
                        letter_spacing={"inherit"}
                      />
                    )}
                  </SimpleTableCell>
                );
              })}
              {Action && Action.length > 1 ? (
                <SimpleTableActionCell onClick={() => toggleActionMenu(index)}>
                  <>
                    <SvgOptionDots />
                  </>
                  {activeRowIndex === index && (
                    <div ref={clickOutsideRef}>
                      <AbsoluteTableActions
                        handleDeleteExtraFunction={() => {
                          setShowDeletePopUp(!ShowDeletePopUp);
                          setObjectId(
                            row.sourceId ||
                              row.SourceId ||
                              row.id ||
                              row.ID ||
                              row.SourceID
                          );
                        }}
                        handleShowNormalPup={() => {
                          setShowPopUp(!ShowPopUp);
                          setObjectId(
                            row.sourceId ||
                              row.SourceId ||
                              row.id ||
                              row.ID ||
                              row.SourceID
                          );
                        }}
                        actions={Action}
                        sourceId={
                          row.sourceId ||
                          row.SourceId ||
                          row.id ||
                          row.ID ||
                          row.SourceID
                        }
                      />
                    </div>
                  )}
                </SimpleTableActionCell>
              ) : null}
            </SimpleTableBodyRow>
          ))}
        </SimpleTableBody>
      </SimpleTableMainContainer>
    </>
  );
};

export default VerySimpleTable;
