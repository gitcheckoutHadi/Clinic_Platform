import React, { useState } from "react";
import { SpaceBetweenFlex } from "../../../../globalStyles";
import styled from "styled-components";
import { SettingNotificationData } from "./SettingNotificationItemData";
import {
  MediumTypography,
  TitleTypography,
  Typography,
} from "../../../../elements/textElement/fonts/Fonts";
import { Switch } from "../../../../elements/Inputs/switch/Switch";
import ShadowBox from "../../../../components/ShadowBox/ShadowBox";

const SettingNotificationItem = () => {
  const [notificationData, setNotificationData] = useState(
    SettingNotificationData
  );

  const handleSwitchChange = (id: number, checked: boolean) => {
    setNotificationData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, checked } : item))
    );
  };
  return (
    <ShadowBox>
      {notificationData &&
        notificationData.map((item, index) => (
          <SpaceBetweenFlex key={index}>
            <SettingNotificationItemColumns>
              <TitleTypography
                text={item.title}
                fontSize="1.5rem"
                lineHeight="2rem"
              />
              <MediumTypography
                text={item.content}
                fontWeight="400"
                lineHeight="1.25rem"
                letter_spacing="0.00625rem"
              />
            </SettingNotificationItemColumns>
            <Switch
              checked={item.checked}
              onChange={(checked) => handleSwitchChange(item.id, checked)}
            />
          </SpaceBetweenFlex>
        ))}
    </ShadowBox>
  );
};

export default SettingNotificationItem;

const SettingNotificationItemColumns = styled.div`
  display: flex;
  gap: 0.62rem;
  flex-direction: column;
  /* background: red; */
  @media (max-width: 700px) {
    width: 100%;
  }
`;
