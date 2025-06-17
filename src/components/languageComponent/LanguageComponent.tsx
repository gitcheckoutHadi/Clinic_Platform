import React, { useState, useEffect } from "react";
import { CustomCheckboxWrapper, RadiosDisplays, } from "./LanguageComponent.style";
import { SvgLanguageIcon } from "../../elements/Icons";
import { useRecoilState } from "recoil";
// import { ColorSelector, PopupSelectorColor, IconsColorSelector, } from "../../recoil/ThemeSelectors";
import { useTranslation } from "react-i18next";
import { languageState } from "../../recoil/RecoilStates";
import { Typography } from "../../elements/textElement/fonts/Fonts";
import CustomCheckbox from "../../elements/customCheckbox/CustomCheckbox";
import PopUp from "../PupUps/PopUp/PopUp";

interface LanguageTogglePopup {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const languages = [
  { code: "en", name: "English" },
  { code: "ar", name: "Arabic" },
];

export default function LanguageComponent({
  show,
  setShow,
}: LanguageTogglePopup) {
  // const { RadioButtonGradientColor } = useRecoilValue(ColorSelector);
  const { i18n } = useTranslation();
  const [, setLanguage] = useRecoilState(languageState);
  const { t } = useTranslation();
  // const { PageBgColor, ContentContainer_BgColor } = useRecoilValue(PopupSelectorColor);
  // const { iconCloseColor } = useRecoilValue(IconsColorSelector);

  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
  }, [selectedLanguage, i18n, setLanguage]);

  const handleLanguageChange = (languageCode: any) => {
    setSelectedLanguage(languageCode);
    setLanguage(languageCode);
    localStorage.setItem("language", languageCode);
  };

  return (

    <>
      <PopUp
        btnWidth="10rem"
        btnheight="2rem"
        minWidth="30%"
        minheight="5rem"
        showPopUp={show}
        setShowPopUp={setShow}
        title={t("language.language")}
        content={
          <div style={{ display: "flex", flexDirection: "column", rowGap: "1.5rem" }}>
            <div style={{ display: "flex", flexDirection: "column", rowGap: "0.63rem", }} >
              <SvgLanguageIcon />
              <Typography text={t("language.Select the language you want to use throughout the system")} fontSize="1rem" />
            </div>
            <RadiosDisplays>
              {languages.map((lang) => (
                <CustomCheckboxWrapper key={lang.code}>
                  <CustomCheckbox
                    checked={selectedLanguage === lang.code}
                    onChange={() => handleLanguageChange(lang.code)}
                  />
                  <Typography fontSize="0.875rem" text={t(`language.${lang.name.toLowerCase()}`)} />
                </CustomCheckboxWrapper>
              ))}
            </RadiosDisplays>
          </div>}
      />
    </>
  );
}
