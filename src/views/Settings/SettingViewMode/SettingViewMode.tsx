import React, { useState, useEffect } from "react";
import { NormalFlex, SpaceBetweenFlex } from "../../../globalStyles";
import { SettingViewModeData } from "./SettingViewModeData";
import { ItemSettingViewModeItem } from "./SettingViewMode.style";
import { MediumTypography } from "../../../elements/textElement/fonts/Fonts";
import FilterTag from "../../../components/Table/FiltersAndActions/FilterTag/FilterTag";
import ColoredButton from "../../../elements/Buttons/ColoredButton/ColoredButton";
import { useNavigate } from "react-router-dom";

interface SettingViewModeInterface {
  viewMode: string;
  setViewMode: React.Dispatch<React.SetStateAction<string>>;
}

const SettingViewMode: React.FC<SettingViewModeInterface> = ({
  viewMode,
  setViewMode,
}) => {
  const [IdItem, setIdItem] = useState("");
  const Navigate = useNavigate();
  // Update IdItem after mapping is completed

  return (
    <SpaceBetweenFlex>
      <NormalFlex
        gap="0.63rem"
        style={{ padding: "1.25rem 1.25rem 0 1.25rem" }}
      >
        {SettingViewModeData.map((item) => (
          <ItemSettingViewModeItem
            key={item.id}
            active={item.id === viewMode}
            onClick={() => setViewMode(item.id)}
          >
            <MediumTypography
              text={item.label}
              color="inherit"
              cursor="pointer"
            />
          </ItemSettingViewModeItem>
        ))}
      </NormalFlex>

      {viewMode === "ClinicProfileSettings" && (
        <div
          style={{
            margin: "1.25rem 1.25rem 0 0",
          }}
        >
          <ColoredButton
            text={"Edit Profile"}
            borderRadius="6.25rem"
            onClick={() => Navigate("ClinicEditProfile")}
          />
        </div>
      )}
    </SpaceBetweenFlex>
  );
};

export default SettingViewMode;
