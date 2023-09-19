import { PaletteMode } from "@mui/material";
import { PaletteTheme } from "./types";
import Values from "values.js";
import { paletteColor } from "./constants";

const createThemeUsingColor = (color: string, mode: PaletteMode = "light") => {
  const colorValue = new Values(color, "base");
  return {
    mode: mode,
    primary: {
      main: color,
    },
    background: {
      appbar: colorValue.shade(60).hexString(),
      default: mode === "light" ? "#d1d1d1" : "#232323",
      paper: mode === "light" ? "#ececec" : colorValue.shade(70).hexString(),
    },
    text: {
      heading: colorValue.tint(20).hexString(),
      link: colorValue.tint(30).hexString(),
      linkBg: mode === "light" ? "#ececec" : colorValue.shade(70).hexString(),
      linkHoverBg:
        mode === "light" ? "#cecece" : colorValue.shade(80).hexString(),
      textarea: mode === "light" ? "#424242" : "#bbbbbb",
    },
  };
};

export const getPalatteTheme = (mode: PaletteTheme) => {
  switch (mode) {
    case "light":
      return createThemeUsingColor(paletteColor.light.themeColor);
    case "dark":
      return createThemeUsingColor(paletteColor.dark.themeColor, "dark");
    case "purple":
      return createThemeUsingColor(paletteColor.purple.themeColor, "dark");
    case "teal":
      return createThemeUsingColor(paletteColor.teal.themeColor);
    default:
      return createThemeUsingColor("#606060");
  }
};