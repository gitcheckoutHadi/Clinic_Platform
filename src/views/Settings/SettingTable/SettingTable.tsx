import React, { useState } from "react";
import Table from "../../../components/Table/Table";
import { SettingBodyTable, SettingTableHeaderData } from "./SettingTableData";
import { Action } from "../../../components/Table/TableInterface";
import { SvgResetPassword, SvgViewProfile } from "../../../elements/Icons";
import PopUp from "../../../components/PupUps/PopUp/PopUp";
import NewTextBox from "../../../elements/Inputs/NewTextBox/NewTextBox";
import axios from "axios";

const SettingTable = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [SourceId, setSourceId] = useState<string>("");
  const [Password, setPassword] = useState("");
  const [errorPassword, seterrorPassword] = useState("");
  const [ChangePasswordLoading, setChangePasswordLoading] = useState<{
    [id: string]: boolean;
  }>({});
  const dummyActions: Action[] = [
    {
      text: "Change Password",
      value: "ChangePassword",
      icon: SvgResetPassword,
      stroke: false,
      fill: true,
      onClick: async (id: any) => {
        // Make the function async
        console.log("On click Id is ", id);
        setChangePasswordLoading((prevState) => ({ ...prevState, [id]: true }));

        try {
          await axios.patch(
            `https://9z6xeihi9l.execute-api.eu-west-1.amazonaws.com/dev/classes/archive`,
            {
              data: { sourceId: id },
            }
          );

          // await SettingBodyTable();
          // setChangePasswordLoading({ ...ChangePasswordLoading, [id]: false });
        } catch (error) {
          console.error("Error updating password:", error);
        }

        setChangePasswordLoading((prevState) => ({
          ...prevState,
          [id]: false,
        }));
      },
    },
  ];

  return (
    <>
      <Table
        TableTitle="User List"
        columns={SettingTableHeaderData}
        rows={SettingBodyTable}
        AddButtonText="Add User"
        Action={dummyActions}
        IdLoading={ChangePasswordLoading}
      />
      <PopUp
        showPopUp={isPopUpOpen}
        setShowPopUp={setIsPopUpOpen}
        title="change passowrd"
        content={
          <>
            <NewTextBox
              value={SourceId}
              setValue={setSourceId}
              text="general.First Name"
              errorValue={errorPassword}
              setErrorValue={seterrorPassword}
              mandatory={true}
              placeHolder="Enter First Name"
            />
          </>
        }
      />
    </>
  );
};

export default SettingTable;
