import React from "react";
import { NormalFlex, PageFlex, SpaceBetweenFlex } from "../../globalStyles";
import { useParams } from "react-router-dom";
import PaymentDetailTable from "./PaymentDetailTable/PaymentDetailTable";
import HeaderNavigator from "../../elements/headerNavigator/HeaderNavigator";
import CircularImage from "../../elements/circularImage/CircularImage";
import { PaymentDetailColumn, PaymentDetailRow } from "./paymentDetail.style";
import {
  TitleTypography,
  Typography,
} from "../../elements/textElement/fonts/Fonts";
import ColoredButton from "../../elements/Buttons/ColoredButton/ColoredButton";
import { SvgReminderIcon } from "../../elements/Icons";
import ReminderButton from "../../elements/Buttons/ReminderButton/ReminderButton";
import ShadowBox from "../../components/ShadowBox/ShadowBox";
import { PaymentHeaderProperties } from "./PaymentDetailTable/PaymentDetailTableData";
import ColoredBoxShadow from "../../components/ColoredBoxShadow/ColoredBoxShadow";

const PaymentDetail = () => {
  const { id } = useParams(); // Destructure `id` from useParams
  console.log("Payment ID:", id);
  return (
    <PageFlex>
      <HeaderNavigator text="Payment Details" />

      <ShadowBox>
        <SpaceBetweenFlex>
          <PaymentDetailRow>
            <CircularImage size="5rem" />
            <PaymentDetailColumn>
              <TitleTypography
                text="Sarah Omar"
                fontWeight="400"
                lineHeight="2rem"
              />
              <Typography
                text="sarah.omar@gmail.com"
                fontWeight="400"
                lineHeight="1.5rem"
                letter_spacing="0.03125rem"
              />
            </PaymentDetailColumn>
          </PaymentDetailRow>

          <ReminderButton
            text="Send Reminder"
            Icon={SvgReminderIcon}
            borderRadius=" 0.9375rem"
          />
        </SpaceBetweenFlex>
        <NormalFlex>
          {PaymentHeaderProperties &&
            PaymentHeaderProperties.map((item) => (
              <ColoredBoxShadow value={item.value} title={item.title} />
            ))}
        </NormalFlex>
      </ShadowBox>
      <PaymentDetailTable id={id || ""} />
    </PageFlex>
  );
};

export default PaymentDetail;
