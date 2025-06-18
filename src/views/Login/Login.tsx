import React from "react";
import {
  ABSLine,
  AbsoluteLoginEktoLogo,
  AbsoluteLoginLogo,
  ABSWidthLine,
  CupLoginLogo,
  FormContainer,
  MainLoginContainer,
  QuarterLoginContainer,
} from "./Login.style";
import { SvgGrayLogo } from "../../elements/Icons";
import LoginForm from "./LoginForm/LoginForm";
import FullHeightShape from "../../components/Shape/Shape";
import { LogoPic } from "../../constants/Pics/Pics";

const Login = () => {
  return (
    <MainLoginContainer>
      <QuarterLoginContainer>
        <div className="styled-text">
          {" "}
          <span>Clinic Admin</span>
          <span>Panel.</span>
        </div>
        <ABSLine />
        <ABSWidthLine />
      </QuarterLoginContainer>
      <QuarterLoginContainer>
        <CupLoginLogo>
          <AbsoluteLoginEktoLogo>
            {" "}
            {/* <SvgLogoWithText width={250} /> */}
          </AbsoluteLoginEktoLogo>
          {/* <SvgBigCup /> */}
          <FullHeightShape />
          <ABSWidthLine />
        </CupLoginLogo>
        <FormContainer>
          <LoginForm />
        </FormContainer>
      </QuarterLoginContainer>

      <AbsoluteLoginLogo>
        <img src={LogoPic} alt="LogoPic" className="LoginlogoImgS" />
      </AbsoluteLoginLogo>
    </MainLoginContainer>
  );
};

export default Login;
