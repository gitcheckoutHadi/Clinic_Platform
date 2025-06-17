import React from "react";
import Table from "../../../components/Table/Table";
import VerySimpleTable from "../../../components/SimpleTable/VerySimpleTable";
import { OrganizationData, OrganizationHeader } from "./OrganizationTableData";

const OrganizationTable = () => {
  return (
    <>
      <VerySimpleTable Header={OrganizationHeader} data={OrganizationData} />
    </>
  );
};

export default OrganizationTable;
