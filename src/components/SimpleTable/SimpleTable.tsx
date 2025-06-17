import React, { useState } from "react";
import { TableHeaderDataInterface } from "../../Interface/TableInterface/TableInterface";
import {
  EyeColumnArrayShow,
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
  SvgEye,
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
  title: string;
  Action?: Action[];
  linkTo?: string;
  data: any[];
  Header: TableHeaderDataInterface[];
  flexWidths?: number[];
  minWidth?: string[];
  SecondArrayText?: string;

  handleViewDetailPopUp?: () => void;
  PopUpContent?: any;
  PropsObjectId?: number | null;
  setPropsObjectId?: React.Dispatch<React.SetStateAction<number | null>>;
  EyeShow?: boolean;
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString(); // You can customize the date format as needed
};

const SimpleTable = ({
  Header,
  handleViewDetailPopUp,
  Action,
  data,
  SecondArrayText,
  title,
  linkTo,
  flexWidths = [],
  minWidth = [],
  PopUpContent,
  actions,
  PropsObjectId,
  setPropsObjectId,
  EyeShow,
}: SimpleTableInterface) => {
  const { secondaryColor } = useRecoilValue(MainColorSelector);
  const navigate = useNavigate();
  const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);
  const [ObjectId, setObjectId] = useState<number | null>(null);
  const [ShowDeletePopUp, setShowDeletePopUp] = useState<boolean>(false);
  const [ShowPopUp, setShowPopUp] = useState<boolean>(false);
  const [ViewSourceIDPopUp, setViewSourceIDPopUp] = useState<boolean>(false);
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
      {ViewSourceIDPopUp && (
        <PopUp
          showPopUp={ViewSourceIDPopUp}
          setShowPopUp={setViewSourceIDPopUp}
          title={`Patient Information`}
          contentwidth="80%"
          content={<>{PopUpContent} </>}
          closeClick={() => {
            setPropsObjectId && setPropsObjectId(null);
            setViewSourceIDPopUp(false);
          }}
        />
      )}
      <ShadowBox padding="0.5rem 0 0 0">
        <SimpleTableMainContainer>
          <PaymentSummaryRowContainer style={{ padding: "0rem 1.25rem" }}>
            <Typography
              fontSize="1.125rem"
              text={"Appointments"}
              fontWeight="700"
              lineHeight="120%"
            />
            <BTNRowsPaymentSummary>
              <FilterBox actions={actions} />
              <TitleAndSearchRefreshContainer>
                <SvgExpandIcon className="IconStrokeTable" />
              </TitleAndSearchRefreshContainer>
            </BTNRowsPaymentSummary>
          </PaymentSummaryRowContainer>
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
                  color="#7E22CE"
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
                        <EyeColumnArrayShow EyeShow={EyeShow}>
                          {cellData.map((value: string, valueIndex: number) => (
                            <div
                              key={valueIndex}
                              style={{ display: "flex", alignItems: "center" }}
                              onClick={() => {
                                EyeShow &&
                                  EyeShow &&
                                  setPropsObjectId &&
                                  setPropsObjectId(
                                    row.sourceId ||
                                      row.SourceId ||
                                      row.id ||
                                      row.ID ||
                                      row.SourceID
                                  );
                                setViewSourceIDPopUp(!ViewSourceIDPopUp);
                              }}
                            >
                              {/* Show SvgEye for the first valueIndex */}
                              {EyeShow && valueIndex === 0 && (
                                <SvgEye style={{ marginRight: "8px" }} />
                              )}

                              <MediumTypography
                                opacity={valueIndex > 0 ? "0.5" : "1"}
                                fontWeight={valueIndex > 0 ? "400" : "700"}
                                text={
                                  valueIndex > 0 && SecondArrayText
                                    ? `${SecondArrayText} ${value}`
                                    : value
                                }
                              />
                            </div>
                          ))}
                        </EyeColumnArrayShow>
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
                  <SimpleTableActionCell
                    onClick={() => toggleActionMenu(index)}
                  >
                    <>
                      <SvgOptionDots />
                    </>
                    {activeRowIndex === index && (
                      <div ref={clickOutsideRef}>
                        <AbsoluteTableActions
                          handleDeleteExtraFunction={() => {
                            setShowDeletePopUp(!ShowDeletePopUp);
                            setObjectId &&
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
                            setObjectId &&
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
      </ShadowBox>{" "}
    </>
  );
};

export default SimpleTable;
