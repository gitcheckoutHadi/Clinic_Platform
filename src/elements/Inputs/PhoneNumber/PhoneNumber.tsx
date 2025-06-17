import React, { useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import {
  MainPhoneNumberContainer,
  TitlePhoneNumber,
} from "./PhoneNumber.style";
import { MediumTypography } from "../../textElement/fonts/Fonts";
import { useTranslation } from "react-i18next";

interface PhoneNumberProps {
  value: string | undefined;
  setValue: (value: string | undefined) => void;
  text?: string;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({ value, setValue, text }) => {
  const [defaultCountry, setDefaultCountry] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const getCountryCode = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = await response.json();

            // Assign the country code if it's valid
            if (data.countryCode && typeof data.countryCode === "string") {
              setDefaultCountry(data.countryCode);
            }
          } catch (error) {
            console.error("Failed to fetch country code:", error);
          }
        });
      }
    };

    getCountryCode();
  }, []);
  const { t } = useTranslation();
  return (
    <MainPhoneNumberContainer>
      <PhoneInput
        placeholder={t("general.Enter Phone Number")}
        value={value}
        onChange={setValue}
        defaultCountry={defaultCountry as any} // Type assertion to bypass the type mismatch
      />
      <TitlePhoneNumber>
        <MediumTypography
          text={text || t("general.Phone Number")}
          lineHeight="1rem"
          letter_spacing="0.025rem"
        />
      </TitlePhoneNumber>
    </MainPhoneNumberContainer>
  );
};

export default PhoneNumber;
