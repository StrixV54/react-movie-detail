import { PaletteMode } from "@mui/material";
import { PaletteTheme } from "./types";
import Values from "values.js";
import { COLOR_CONSTANTS, PALETTE_COLOR } from "./constants";

// const DEFAULT_THEME_COLOR = {
//   LIGHT_BG: "#ececec",
//   HOVER_BG: "#cecece",
//   DEFAULT_LIGHT_BG: "#d1d1d1",
//   DEFAULT_DARK_BG: "#181818",
//   TEXTAREA_LIGHT: "#3d3d3d",
//   TEXTAREA_DARK: "#bbbbbb",
// };

/**
 *
 * @param color Color to assign shades from and create theme from it.
 * @param mode Material Ui theme mode (dark/light) related to the color provided.
 * @returns A theme object for Material UI palette
 */
const createThemeUsingColor = (color: string, mode: PaletteMode = "light") => {
  const colorValue = new Values(color, "base");
  const grayShade = new Values(COLOR_CONSTANTS.GRAY_WHITE_BALANCE, "base");
  return {
    mode: mode,
    primary: {
      main: color,
    },
    background: {
      appbar: colorValue.shade(60).hexString(),
      default: mode === "light" ? grayShade.tint(50).hexString() : grayShade.shade(85).hexString(),
      paper: mode === "light" ? grayShade.tint(90).hexString() : colorValue.shade(70).hexString(),
    },
    text: {
      heading: colorValue.tint(20).hexString(),
      link: colorValue.tint(30).hexString(),
      linkBg: mode === "light" ? grayShade.tint(50).hexString() : colorValue.shade(70).hexString(),
      linkHoverBg:
        mode === "light" ? grayShade.tint(20).hexString() : colorValue.shade(80).hexString(),
      textarea: mode === "light" ? grayShade.shade(60).hexString() : grayShade.tint(30).hexString(),
    },
  };
};

export const getPalatteTheme = (mode: PaletteTheme) => {
  switch (mode) {
    case "light":
    case "teal":
      return createThemeUsingColor(PALETTE_COLOR[mode].themeColor);
    case "dark":
    case "purple":
      return createThemeUsingColor(PALETTE_COLOR[mode].themeColor, "dark");
    default:
      return createThemeUsingColor(COLOR_CONSTANTS.GRAY);
  }
};
