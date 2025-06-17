import React from "react";
import {
  ImageCircularLogo,
  MainClinicProfileCircle,
  PropProfileCircle,
} from "./ClinicProfileStyle";

interface ClinicProfileLogoInterface {
  data: {
    img: string;
    bgColor: string;
  };
}
const ClinicProfileLogo = ({ data }: ClinicProfileLogoInterface) => {
  return (
    <MainClinicProfileCircle>
      <ImageCircularLogo src={data.img} />
      <PropProfileCircle bgcolor={data.bgColor} />
    </MainClinicProfileCircle>
  );
};

export default ClinicProfileLogo;
