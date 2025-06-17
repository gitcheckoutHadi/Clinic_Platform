import React, { useState } from "react";
import User from "../../../components/Forms/User/User";

const AddUser = () => {
  const [FirstName, setFirstName] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [PhoneNumber, setPhoneNumber] = useState<string>("");
  const [Role, setRole] = useState<string>("");
  const handleSave = () => {
    console.log("Form Submitted!");
  };
  return (
    <div>
      <User
        data={{
          FirstName,
          setFirstName,
          LastName,
          setLastName,
          PhoneNumber,
          setPhoneNumber,
          Email,
          setEmail,
          // Role,
          // setRole,
        }}
        handleSave={handleSave}
      />
    </div>
  );
};

export default AddUser;
