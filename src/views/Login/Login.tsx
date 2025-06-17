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
import { SvgGrayLogo, SvgLogoWithText } from "../../elements/Icons";
import LoginForm from "./LoginForm/LoginForm";
import FullHeightShape from "../../components/Shape/Shape";

const Login = () => {
  return (
    <MainLoginContainer>
      <QuarterLoginContainer>
        <SvgLogoWithText className="styled-SVG" />
        <div className="styled-text">
          <span>Best IVF</span>
          <span></span>
          <span>Controller.</span>
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
        <SvgGrayLogo />
      </AbsoluteLoginLogo>
    </MainLoginContainer>
  );
};

export default Login;
