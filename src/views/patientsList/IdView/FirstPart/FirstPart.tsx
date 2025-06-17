import React from "react";
import ShadowBox from "../../../../components/ShadowBox/ShadowBox";
import {
  IdViewFirstButtonsRows,
  IdViewFirstPartMainContainer,
  IdViewFirstPartRows,
} from "./IdViewFirstPart.style";
import { IdInterface } from "../../../../Interface/ID/IDInterface";
import CircularImage from "../../../../elements/circularImage/CircularImage";
import { profileInfoData } from "./ProfileInfoData";
import {
  TitleTypography,
  Typography,
} from "../../../../elements/textElement/fonts/Fonts";
import FilterTag from "../../../../components/Table/FiltersAndActions/FilterTag/FilterTag";
import ColoredButton from "../../../../elements/Buttons/ColoredButton/ColoredButton";
import ReminderButton from "../../../../elements/Buttons/ReminderButton/ReminderButton";
import TitleTextInfo from "../../../../components/TitleTextInfo/TitleTextInfo";
import { DateFormate } from "../../../../utils/DateFormate";
import QRCodeDisplay from "../../../../elements/QrDisplay/QrDisplay";

const IdViewFirstPart = ({ id }: IdInterface) => {
  return (
    <ShadowBox flexDirection="row">
      <CircularImage size="6.25rem" src={profileInfoData.profile} />
      <IdViewFirstPartMainContainer>
        <IdViewFirstPartRows>
          <TitleTypography text={profileInfoData.name} lineHeight="2rem" />
          <IdViewFirstButtonsRows>
            <FilterTag text="Edit Profile" width="11.625rem" />
            <FilterTag text="Payment History" width="11.625rem" />
            <ReminderButton width="11.625rem" />
          </IdViewFirstButtonsRows>
        </IdViewFirstPartRows>
        <IdViewFirstPartRows>
          <TitleTextInfo
            title="Date Of Birth"
            text={DateFormate(profileInfoData.DateOfBirth)}
          />
          <TitleTextInfo
            title="Nationality"
            text={profileInfoData.Nationality}
          />
          <TitleTextInfo
            title="Phone Number"
            text={profileInfoData.phoneNumber}
          />
          <QRCodeDisplay
            type="url"
            title="Digital Card Number"
            value={profileInfoData.QRCodeLink}
          />
        </IdViewFirstPartRows>
      </IdViewFirstPartMainContainer>
    </ShadowBox>
  );
};

export default IdViewFirstPart;
