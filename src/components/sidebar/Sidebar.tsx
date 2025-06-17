import React, { useState } from "react";
import { ItemLabel, SidebarItem, SidebarStyle, Tooltip } from "./Sidebar.style";
import { useRecoilValue } from "recoil";
import { MainColorSelector } from "../../recoil/ThemeSelectors";
import { SidebarData, SidebarDataInterface } from "./SidebarData";
import { Typography } from "../../elements/textElement/fonts/Fonts";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { secondaryColor } = useRecoilValue(MainColorSelector);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  const Navigate = useNavigate();

  const handleNavigate = (item: SidebarDataInterface, index: number) => {
    Navigate(item.path);
    setActiveIndex(index);
  };
  const { t } = useTranslation();
  return (
    <SidebarStyle
      bgcolor={secondaryColor}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      hovered={hovered.toString()}
    >
      {SidebarData.map((item, index) => (
        <SidebarItem
          key={index}
          onClick={() => handleNavigate(item, index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          isactive={pathName
            .includes(item.path)
            //  || activeIndex === index
            .toString()} // Ensures isactive is passed as "true" or "false"
        >
          <item.icon className="icon_styling" />
          <ItemLabel hovered={hovered.toString()}>
            {" "}
            <Typography
              text={t(`sidebar.${item.label}`)}
              // text={item.label}
              fontSize="0.91rem"
              color={pathName.includes(item.path) ? "#231d46" : "white"}
              cursor="pointer"
            />
          </ItemLabel>
          {hoveredIndex === index && <Tooltip>{item.label}</Tooltip>}
        </SidebarItem>
      ))}
    </SidebarStyle>
  );
};

export default Sidebar;
