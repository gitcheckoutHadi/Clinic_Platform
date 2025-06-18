import React, { useState, useEffect } from "react";
import {
  FixedLogo,
  PageHeaderStyle,
  RelativeLogo,
  RightHeaderStyle,
} from "./PageHeader.style";
import { useRecoilValue } from "recoil";
import { MainColorSelector } from "../../recoil/ThemeSelectors";
import { SvgEktoLifeLogoIcon, SvgLogo } from "../../elements/Icons";
import ProfileNotification from "./ProfileNotification/ProfileNotification";
import { LogoPic } from "../../constants/Pics/Pics";

const PageHeader = () => {
  const { secondaryColor } = useRecoilValue(MainColorSelector);
  const [showLanguage, setShowLanguage] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 24); // 5rem = 80px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* {scrolled ? (
        <RelativeLogo>
          <FixedLogo>
            <SvgLogo />
          </FixedLogo>
        </RelativeLogo>
      ) : ( */}
      <PageHeaderStyle>
        <img src={LogoPic} alt="LogoPic" className="logoImgS" />
        <RightHeaderStyle>
          <ProfileNotification />
        </RightHeaderStyle>
      </PageHeaderStyle>
      {/* )} */}
    </>
  );
};

export default PageHeader;
