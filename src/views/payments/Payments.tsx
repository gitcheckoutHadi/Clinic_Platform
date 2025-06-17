import React from "react";
import { PageFlex } from "../../globalStyles";
import HeaderText from "../../elements/headerText/HeaderText";
import ShadowBox from "../../components/ShadowBox/ShadowBox";
import { Typography } from "../../elements/textElement/fonts/Fonts";
import PaymentRenewalTable from "./PaymentRenewalTable/PaymentRenewalTable";
import { TitleValueInterface } from "../../Interface/HeaderCompInterface/HeaderCompInterface";
import PropertyHeader from "../../components/PropertyHeader/PropertyHeader";

const Payments = () => {
  const PaymentHeaderData: TitleValueInterface[] = [
    { value: "125 / 200", title: "general.Active" },
    { value: "10", title: "patients.Upcoming Renewals" },
    { value: "5", title: "patients.Pending onboarding" },
  ];

  return (
    <PageFlex>
      <HeaderText title="paymentRenewals.Payment and Renewals" />
      <PaymentRenewalTable />
    </PageFlex>
  );
};

export default Payments;
