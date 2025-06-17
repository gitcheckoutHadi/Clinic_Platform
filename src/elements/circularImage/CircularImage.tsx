import React from "react";
import { ImageCircular } from "./CircularImage.style";
import { UserImg } from "../../constants/Pics/Pics";

interface CircularImageInterface {
  size: string;
  src?: string;
  boxShadow?: boolean;
}
const CircularImage = ({
  size,
  src = UserImg,
  boxShadow,
}: CircularImageInterface) => {
  return (
    <ImageCircular width={size} height={size} src={src} boxShadow={boxShadow} />
  );
};

export default CircularImage;
