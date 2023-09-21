export const BASE_URL = import.meta.env.VITE_BASEPATH || "http://localhost:5000";

export const PALETTE_COLOR = {
  light: { displayColor: "#b9b9b9", themeColor: "#0d8ce0" },
  dark: { displayColor: "#292929", themeColor: "#1045a8" },
  purple: { displayColor: "#6310a7", themeColor: "#b559f2" },
  teal: { displayColor: "#0b8286", themeColor: "#12797c" },
};

export const LIST_OF_PAGES_AND_ROUTES = [
  { id: "1", name: "List of Movies", path: "/my-app" },
  { id: "2", name: "Genre", path: "/genres" },
];

export const CATEGORY_MOVIES = ["action", "crime", "drama"];

export const COLOR_CONSTANTS = {
  GRAY: "#373737",
  LIGHT_GRAY: "#a2a2a2",
  GRAY_WHITE_BALANCE : "#d1d1d1",
};
