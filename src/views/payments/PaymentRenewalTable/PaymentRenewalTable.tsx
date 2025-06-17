import React from "react";
import Table from "../../../components/Table/Table";
import {
  PaymentRenewalTableBody,
  PaymentRenewalTableHeader,
} from "./PaymentRenewalTableData";
import { JustViewAction } from "../../../components/Table/AbsoluteTableActions/JustViewAction";
import { ViewReminderAction } from "../../../components/Table/AbsoluteTableActions/ViewReminderAction";

const PaymentRenewalTable = () => {
  return (
    <div>
      <Table
        TableTitle="paymentRenewals.Payment Records"
        columns={PaymentRenewalTableHeader}
        rows={PaymentRenewalTableBody}
        Action={ViewReminderAction()}
        // DeleteFunction={}
      />
    </div>
  );
};

export default PaymentRenewalTable;
