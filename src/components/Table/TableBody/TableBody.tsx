import React, { useState } from "react";
import { TableHeaderDataInterface } from "../../../Interface/TableInterface/TableInterface";
import {
  PointerDotsContainer,
  PointerDotsContainerAnimated,
  TableBodyColumnRender,
  TableBodyRow,
  TableRowActionCell,
  TableRowCell,
} from "./TableBody.style";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";
import {
  TableBodyTextColor,
  TableBodyTextFontWeight,
  TableBodyTextLetterSpacing,
  TableBodyTextLineHeight,
} from "./functions";
import { Action } from "../TableInterface";
import { SvgEye, SvgOptionDots } from "../../../elements/Icons";
import AbsoluteTableActions from "../AbsoluteTableActions/AbsoluteTableActions";
import MappedIndexClickOutSide from "../../../hooks/MapedIndexClickOutSide";
import DeletePopUp from "../../PupUps/DeletePopUp/DeletePopUp";
import OneAction from "../OneAction/OneAction";
import { DummyActions } from "../AbsoluteTableActions/DummyActions";
import { useTranslation } from "react-i18next";
import PopUp from "../../PupUps/PopUp/PopUp";
import {
  EyeColumnArrayShow,
  EyeRowShow,
} from "../../SimpleTable/SimpleTable.style";
import IndexLoadingSpinner from "../../Loaders/IndexLoadingSpinner/IndexLoadingSpinner";
import { ResizeHandle } from "../TableHeader/TableHeader.style";

interface TableBodyInterface {
  columns: TableHeaderDataInterface[];
  SecondArrayText?: string;
  rows: any[];
  Action?: Action[];
  DeleteFunction?: (sourceId: string) => void; // Update the function signature to accept an argument
  ReminderFunction?: (ReminderSource: string) => void;
  flexWidths?: number[];
  minWidth?: string[];
  PopUpContent?: any;
  PropsObjectId?: number | null;
  setPropsObjectId?: React.Dispatch<React.SetStateAction<number | null>>;
  EyeShow?: boolean;
  PopUpTitle?: string;
  PopUpContentWidth?: string;
  IdLoading?: string;
  columnWidths: string[];
  handleMouseDown: any;
  hoveredColumnIndex: number | null;
}

const TableBody = ({
  columns,
  rows,
  Action,
  DeleteFunction,
  ReminderFunction,
  SecondArrayText,
  flexWidths = [],
  minWidth = [],
  PropsObjectId,
  setPropsObjectId,
  EyeShow = false,
  PopUpContent,
  PopUpTitle,
  PopUpContentWidth,
  IdLoading,
  columnWidths,
  handleMouseDown,
  hoveredColumnIndex,
}: TableBodyInterface) => {
  // State to track the currently active row for the action menu
  const { t } = useTranslation();
  const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);
  const [ViewSourceIDPopUp, setViewSourceIDPopUp] = useState<boolean>(false);
  const [ObjectId, setObjectId] = useState<number | null>(null);
  const [ShowDeletePopUp, setShowDeletePopUp] = useState<boolean>(false);

  const toggleActionMenu = (index: number) => {
    setActiveRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const clickOutsideRef = MappedIndexClickOutSide(() =>
    setActiveRowIndex(null)
  );

  const DeleteObject = (objectId: any) => {
    if (!objectId) {
      console.error("Invalid objectId passed to DeleteObject:", objectId);
      return;
    }
    DeleteFunction?.(objectId);
  };

  return (
    <>
      {ViewSourceIDPopUp && (
        <PopUp
          showPopUp={ViewSourceIDPopUp}
          setShowPopUp={setViewSourceIDPopUp}
          title={PopUpTitle || ""}
          contentwidth={PopUpContentWidth}
          content={<>{PopUpContent} </>}
          closeClick={() => {
            setPropsObjectId && setPropsObjectId(null);
            setViewSourceIDPopUp(false);
          }}
        />
      )}
      {ShowDeletePopUp && (
        <DeletePopUp
          showPopUp={ShowDeletePopUp}
          setShowPopUp={setShowDeletePopUp}
          title={`Are you Sure to Delete ${ObjectId} ?`}
          DeleteClick={() => DeleteObject(ObjectId)}
        />
      )}
      <TableBodyColumnRender>
        {rows.map((row, index) => (
          <TableBodyRow key={index}>
            {columns.map((column, colIndex) => {
              const cellData = row[columns[colIndex].id];
              const colIndexInOriginal = columns.findIndex(
                (c) => c.id === column.id
              );
              const isHoveredColumn = colIndexInOriginal === hoveredColumnIndex;

              return (
                <TableRowCell
                  key={colIndex}
                  // flexWidth={flexWidths[colIndex] || 1}
                  // minWidth={columnWidths[colIndexInOriginal] || "9rem"}
                  // EyeShow={EyeShow}
                  flexWidth={row.flex || 1}
                  // minWidth={row.minWidth || "8rem"}
                  HoveredColumn={isHoveredColumn}
                >
                  {Array.isArray(cellData) ? (
                    <EyeColumnArrayShow EyeShow={EyeShow}>
                      {cellData.map((value: string, valueIndex: number) => (
                        <div
                          key={valueIndex}
                          style={{ display: "flex", alignItems: "center" }}
                          onClick={() => {
                            if (EyeShow) {
                              setPropsObjectId &&
                                setPropsObjectId(
                                  row.sourceId ||
                                    row.SourceId ||
                                    row.id ||
                                    row.ID ||
                                    row.SourceID
                                );
                              setViewSourceIDPopUp(!ViewSourceIDPopUp);
                            }
                          }}
                        >
                          {/* Show SvgEye for the first valueIndex */}
                          {EyeShow && valueIndex === 0 && (
                            <SvgEye
                              // stroke="#505355"
                              style={{ marginRight: "8px" }}
                            />
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
                    <EyeRowShow
                      EyeShow={EyeShow}
                      index={colIndex}
                      onClick={() => {
                        if (EyeShow && colIndex === 0) {
                          if (setPropsObjectId) {
                            setPropsObjectId(
                              row.sourceId ||
                                row.SourceId ||
                                row.id ||
                                row.ID ||
                                row.SourceID
                            );
                          }
                          setViewSourceIDPopUp(!ViewSourceIDPopUp);
                        }
                      }}
                    >
                      {EyeShow && colIndex == 0 && (
                        <SvgEye
                          // stroke="#505355"
                          style={{ marginRight: "8px" }}
                        />
                      )}{" "}
                      <MediumTypography
                        text={t(cellData || "null")}
                        fontWeight={
                          colIndex === 0
                            ? "700"
                            : TableBodyTextFontWeight(cellData)
                        }
                        color={
                          colIndex === 0
                            ? "inherit"
                            : TableBodyTextColor(t(cellData), t)
                        }
                        lineHeight={
                          colIndex === 0
                            ? "inherit"
                            : TableBodyTextLineHeight(cellData)
                        }
                        letter_spacing={
                          colIndex === 0
                            ? "inherit"
                            : TableBodyTextLetterSpacing(cellData)
                        }
                        cursor="inherit"
                      />
                    </EyeRowShow>
                  )}
                  <ResizeHandle
                    onMouseDown={(e) => handleMouseDown(e, colIndexInOriginal)}
                  />
                </TableRowCell>
              );
            })}
            {Action &&
              (Action.length > 1 ? (
                <TableRowActionCell>
                  <PointerDotsContainerAnimated
                    onClick={() => toggleActionMenu(index)}
                  >
                    <SvgOptionDots />
                  </PointerDotsContainerAnimated>
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
                        handleRemiNderFunction={() =>
                          ReminderFunction?.(
                            row.sourceId ||
                              row.SourceId ||
                              row.id ||
                              row.ID ||
                              row.SourceID
                          )
                        }
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
                </TableRowActionCell>
              ) : (
                <TableRowActionCell>
                  {IdLoading &&
                  IdLoading[
                    row.sourceId ||
                      row.SourceId ||
                      row.id ||
                      row.ID ||
                      row.SourceID
                  ] ? (
                    <div style={{ margin: "1rem" }}>
                      <IndexLoadingSpinner height="1rem" />
                    </div>
                  ) : (
                    <OneAction
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
                      actions={Action}
                      sourceId={
                        row.sourceId ||
                        row.SourceId ||
                        row.id ||
                        row.ID ||
                        row.SourceID
                      }
                    />
                  )}
                </TableRowActionCell>
              ))}
          </TableBodyRow>
        ))}
      </TableBodyColumnRender>
    </>
  );
};

export default TableBody;
