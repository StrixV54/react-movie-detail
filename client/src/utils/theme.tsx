import { PaletteMode } from "@mui/material";
import { PaletteTheme } from "./types";

export const getTheme = (mode: PaletteTheme) => {
  switch (mode) {
    case "light":
      return {
        mode: "light" as PaletteMode,
        primary: {
          main: "#020202",
        },
        background: {
          appbar: "#285395",
          default: "#ececec",
        },
        text: {
          heading: "#13679f",
          link: "#13679f",
          linkBg: "#efefef",
          linkHoverBg: "#cfcfcf",
          textarea: "#525252",
        },
      };
    case "dark":
      return {
        mode: "dark" as PaletteMode,
        primary: {
          main: "#285395",
        },
        background: {
          appbar: "#285395",
          default: "#2c2c2c",
          paper: "#3d3d3d",
        },
        text: {
          heading: "#59b8de",
          link: "#59b8de",
          linkBg: "#3a3a3a",
          linkHoverBg: "#303030",
          textarea: "#c7c7c7",
        },
      };
    case "purple":
      return {
        mode: "dark" as PaletteMode,
        primary: {
          main: "#8434b9",
        },
        background: {
          appbar: "#541f78",
          default: "#2c2c2c",
          paper: "#39293f",
        },
        text: {
          heading: "#b559f2",
          link: "#9d40da",
          linkBg: "#432f43",
          linkHoverBg: "#303030",
          textarea: "#c7c7c7",
        },
      };
    case "teal":
      return {
        mode: "light" as PaletteMode,
        primary: {
          main: "#020202",
        },
        background: {
          appbar: "#115b57",
          default: "#dddddd",
          paper: "#bbbbbb",
        },
        text: {
          heading: "#12797c",
          link: "#12797c",
          linkBg: "#cfcfcf",
          linkHoverBg: "#cfcfcf",
          textarea: "#525252",
        },
      };
  }
};
