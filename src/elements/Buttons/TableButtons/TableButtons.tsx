import React from "react";
import {
  TableButtonsMainContainer,
  TableLineContainer,
} from "./TableButtonsStyle";
import { Typography } from "../../textElement/fonts/Fonts";
interface TableButtonsInterface {
  text: string;
  onClick?: () => void;
}
const TableButtons = ({ text, onClick }: TableButtonsInterface) => {
  return (
    <TableButtonsMainContainer onClick={onClick}>
      <Typography
        text={text}
        color="inherit"
        lineHeight="120%"
        fontSize="0.875rem"
        fontWeight="400"
        cursor="pointer"
      />
      <TableLineContainer />
    </TableButtonsMainContainer>
  );
};

export default TableButtons;
