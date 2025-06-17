import React from "react";
import Table from "../../../../components/Table/Table";
import {
  PatientIdTreatmentBodyData,
  PatientIdTreatmentHeaderData,
} from "./ThirdPartTableData";
import { IdInterface } from "../../../../Interface/ID/IDInterface";
import { EditDeleteActions } from "../../../../components/Table/AbsoluteTableActions/EditDeleteActions";

const PatientIdTreatmentTable = ({ id }: IdInterface) => {
  return (
    <div>
      <Table
        TableTitle="Treatment History"
        columns={PatientIdTreatmentHeaderData}
        rows={PatientIdTreatmentBodyData}
        Action={EditDeleteActions()}
        AddButtonText="Add Treatment"
      />
    </div>
  );
};

export default PatientIdTreatmentTable;
