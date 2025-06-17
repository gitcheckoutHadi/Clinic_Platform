import React, { useState } from "react";
import {
  SideBarActivePlace,
  SideBarItem,
  SideBarLayout,
  Tooltip,
} from "./SideBar.style";
import { SidebarData, SidebarDataInterface } from "./SidebarData";
import {
  MediumTypography,
  Typography,
} from "../../elements/textElement/fonts/Fonts";
import { useRecoilValue } from "recoil";
import { MainColorSelector } from "../../recoil/ThemeSelectors";
import { useLocation, useNavigate } from "react-router-dom";
import { SvgSideBarIcon } from "../../elements/Icons";

const SideBar = () => {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { mainBackgroundColor, mainBoxShadow } =
    useRecoilValue(MainColorSelector);
  const pathName = location.pathname.split("/")[1];

  const Navigate = useNavigate();
  //   const pathName = location.pathname.split("/")[1];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleNavigate = (item: SidebarDataInterface, index: number) => {
    Navigate(item.path);
    setActiveIndex(index);
  };
  return (
    <SideBarLayout>
      {SidebarData.map((item, index) => (
        <SideBarItem
          key={index}
          onClick={() => handleNavigate(item, index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          boxShadow={mainBoxShadow}
          isactive={pathName
            .includes(item.path)
            //  || activeIndex === index
            .toString()} // Ensures isactive is passed as "true" or "false"
        >
          {pathName.includes(item.path) && (
            <SideBarActivePlace>
              <SvgSideBarIcon />
            </SideBarActivePlace>
          )}
          {pathName.includes(item.path) && item.activeIcon ? (
            <item.activeIcon />
          ) : (
            <item.icon className={item.activeIcon ? "" : "icon_styling"} />
          )}
          {!pathName.includes(item.path) && (
            <Tooltip isVisible={hoveredIndex === index}>
              <MediumTypography
                text={item.label}
                color="#231D46"
                whiteSpace="nowrap"
              />
            </Tooltip>
          )}
        </SideBarItem>
      ))}
    </SideBarLayout>
  );
};

export default SideBar;
