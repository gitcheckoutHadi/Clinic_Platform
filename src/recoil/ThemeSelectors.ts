import { selector } from "recoil";
import { themeState } from "./RecoilStates";
export const themeColors = {
  dark: {},
  light: {
    primary_text_color: "rgb(22, 4, 36)",
    secondary_text_color: "#7E22CE",
    grey_text_color: "#93909B",
    bg_main_color: "#fff",
    bg_button_color: "#231D46",
    box_shadow: "0px 7px 14px 0px rgba(185, 185, 185, 0.25)",
  },
};
export const MainColorSelector = selector({
  key: "MainColorsSelector",
  get: ({ get }) => {
    const secondaryColor = themeColors.light.secondary_text_color;
    const theme = get(themeState);
    // const themeGlobal = get(themeState);
    const mainBackgroundColor =
      // theme === "light"
      // ?
      themeColors.light.bg_main_color;
    // : themeColors.dark.bg_main_color;
    const mainColor =
      // theme === "light"
      // ?
      themeColors.light.primary_text_color;
    // : themeColors.light.bg_Light_Grey;

    const buttonBgColor = themeColors.light.bg_button_color;

    const mainBoxShadow =
      // theme === "light"
      // ?
      themeColors.light.box_shadow;
    // : themeColors.light.bg_Light_Grey;
    const greyColor = themeColors.light.grey_text_color;
    return {
      mainBackgroundColor,
      mainBoxShadow,
      secondaryColor,
      mainColor,
      theme,
      buttonBgColor,
      greyColor,
    };
  },
});
