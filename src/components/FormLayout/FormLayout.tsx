import React from "react";
import ShadowBox from "../ShadowBox/ShadowBox";
import {
  TitleTypography,
  Typography,
} from "../../elements/textElement/fonts/Fonts";
import { FormFlex } from "../../globalStyles";
import FormActions from "../FormActions/FormActions";
interface FormLayoutInterface {
  title?: string;
  children: React.ReactNode;
  onSubmit?: () => void;
  onCancel?: () => void;
}
const FormLayout = ({
  title,
  children,
  onSubmit,
  onCancel,
}: FormLayoutInterface) => {
  return (
    <ShadowBox>
      <TitleTypography
        text={title || "Information"}
        fontWeight="700"
        fontSize="1.125rem"
        lineHeight="120%"
      />
      <FormFlex>{children}</FormFlex>
      {onSubmit && <FormActions onSubmit={onSubmit} onCancel={onCancel} />}
    </ShadowBox>
  );
};

export default FormLayout;
