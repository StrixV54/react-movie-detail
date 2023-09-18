export const baseUrl = import.meta.env.VITE_BASEPATH || "http://localhost:5000";

export const paletteColor = {
  light: "#b9b9b9",
  dark: "#292929",
  purple: "#6310a7",
  teal: "#0b8286",
};

export const listOfPages = [
  { id: "1", name: "List of Movies", path: "/my-app" },
  { id: "2", name: "Genre", path: "/genres" },
];
