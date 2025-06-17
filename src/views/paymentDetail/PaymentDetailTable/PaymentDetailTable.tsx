import { useState } from "react";
import Table from "../../../components/Table/Table";
import {
  PaymentDetailTableBody,
  PaymentDetailTableHeader,
} from "./PaymentDetailTableData";
import GeneralFilterPopUp from "../../../components/PupUps/FilterPopUp/FilterPopUp";
import { handleCheckStoreValue } from "../../../utils/ObjectFuctions";

interface PaymentDetailTableInterface {
  id: string | null;
}
const PaymentDetailTable = ({ id }: PaymentDetailTableInterface) => {
  const [Show, setShow] = useState<boolean>(true);
  const [popUpText, setPopUpText] = useState("");

  const [StatusValue, setStatusValue] = useState<string>("");
  const handleTagClick = (index: number) => {
    if (index === 0) {
      setPopUpText("Status");
    }
  };

  const filteredData = PaymentDetailTableBody.filter((item) => {
    const matchesStatus = StatusValue ? item.Status === StatusValue : true;

    return matchesStatus; // Both filters are applied simultaneously
  });
  const handleRefresh = () => {
    setStatusValue(""); // Reset IDValue
  };
  return (
    <div>
      <Table
        TableTitle="Payment Details"
        columns={PaymentDetailTableHeader}
        rows={filteredData}
        Action={[]}
        IndexShows={[4]}
        onFilterIndexClick={handleTagClick}
        RefreshClick={handleRefresh}
      />

      {popUpText === "Status" && (
        <GeneralFilterPopUp
          title={"Class"}
          ContextValue={StatusValue}
          RenderedValueKey="Status"
          show={Show}
          setShow={setShow}
          data={PaymentDetailTableBody}
          RadioChanges={(e) => handleCheckStoreValue(e, setStatusValue)}
          closeClick={() => setPopUpText("")}
        />
      )}
    </div>
  );
};

export default PaymentDetailTable;
