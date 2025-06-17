import styled from "styled-components";
interface Styles {
  errorValue?: string;
  disabled?: boolean;
}
export const MainPhoneNumberContainer = styled.div<Styles>`
  /* background: yellow !important; */
  display: flex;
  flex: 1 !important;
  min-width: 30rem;
  border: 1px solid #ccc !important;
  /* padding: 0.5rem; */
  border-radius: 0.3125rem !important;
  height: 3rem !important;
  position: relative;
  &:focus-within {
    border-color: ${(props) =>
      props.disabled ? "#ccc" : "#231d46"} !important;
    box-shadow: 0 0 4px #231d4670;
  }
  .PhoneInput {
    display: flex;
    width: 98%;
    border: none;
    padding: 0.7rem !important;
  }
  .PhoneInputInput {
    border: none !important;
    display: flex;
    width: 100%;

    [dir="ltr"] & {
      text-align: left !important;
    }

    [dir="rtl"] & {
      text-align: right !important;
    }
  }

  .PhoneInputInput:focus {
    outline: none !important;
  }

  .PhoneInputCountryIcon {
    border-radius: 0.4rem !important;
    /* border: 1px solid !important; */

    outline: none !important;
    height: 1.44rem;
    width: 2rem;
  }
  .PhoneInputCountry {
    display: flex;
    gap: 0.5rem !important;
    /* background: aqua !important; */
    /* margin-left: 1.5rem !important; */
  }

  .PhoneInputCountryIconImg {
    border-radius: 0.4rem !important;
    height: 1.44rem;
    width: 2rem;

    border: none !important;
    /* background: yellow !important; */
  }
`;

export const TitlePhoneNumber = styled.div`
  position: absolute;
  background: #fff;
  z-index: 3;
  padding: 0;
  top: -0.5rem;

  &:dir(ltr) {
    left: 0.94rem;
  }
  &:dir(rtl) {
    right: 0.94rem;
  }
`;
