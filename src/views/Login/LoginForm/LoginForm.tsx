import React, { useState } from "react";
import {
  AskCreateText,
  InputsLoginFormContainer,
  MainLoginFormContainer,
  RowSpaceLoginFormContainer,
  SingInBtn,
  TitleLoginFormContainer,
} from "./LoginFormStyle";
import {
  MediumTypography,
  Typography,
} from "../../../elements/textElement/fonts/Fonts";
import TextInput from "../../../elements/Inputs/TextInput/TextInput";
import Checkbox from "../../../elements/Inputs/CheckBox/CheckBox";
import { PointerContainer } from "../../../globalStyles";
import { isValidEmail } from "../../../utils/IsValidEmail.";
import NewTextBox from "../../../elements/Inputs/NewTextBox/NewTextBox";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrorEmail, setErrorEmail] = useState("");
  const [ErrorPassword, setErrorPassword] = useState("");
  const [Remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRemember(event.target.checked);
  };
  const HandleSignIn = () => {
    navigate("/dashboard");
    if (!isValidEmail(Email) || Password.trim() === "") {
      if (!isValidEmail(Email))
        setErrorEmail("Please enter a valid email address");
      if (Password.trim() === "") setErrorPassword("Please enter a password");
    } else {
      const LoginData = {
        Email: Email,
        Password: Password,
      };
      console.log("LoginData", LoginData);
    }
  };

  return (
    <MainLoginFormContainer>
      <TitleLoginFormContainer>
        <Typography
          text="Welcome Back!"
          fontSize="2.25rem"
          fontWeight="700"
          lineHeight="120%"
        />
      </TitleLoginFormContainer>
      <InputsLoginFormContainer>
        <MediumTypography
          text="Please enter your details"
          fontWeight="700"
          lineHeight="120%"
          color="#898DDA"
        />

        <NewTextBox
          value={Email}
          setValue={setEmail}
          text=""
          errorValue={ErrorEmail}
          setErrorValue={setErrorEmail}
          placeHolder="Enter your email"
          inputBgColor="#fff"
        />
        <NewTextBox
          type="password"
          value={Password}
          setValue={setPassword}
          text=""
          placeHolder="Enter password"
          errorValue={ErrorPassword}
          setErrorValue={setErrorPassword}
          inputBgColor="#fff"
        />
      </InputsLoginFormContainer>
      <RowSpaceLoginFormContainer>
        <Checkbox
          checked={Remember}
          onChange={handleCheckboxChange}
          label="Remember me"
        />
        <PointerContainer>
          <MediumTypography
            fontWeight="700"
            lineHeight="120%"
            text={"Forgot password"}
          />
        </PointerContainer>
      </RowSpaceLoginFormContainer>
      <SingInBtn onClick={HandleSignIn}>
        <MediumTypography text="Sign In" fontWeight="700" color="#FFF" />
      </SingInBtn>
      {/* <AskCreateText>
        <p className="new-to-ektolife">
          New to Ektolife?{" "}
          <span className="create-account">Create account</span>
        </p>
      </AskCreateText> */}
    </MainLoginFormContainer>
  );
};

export default LoginForm;
