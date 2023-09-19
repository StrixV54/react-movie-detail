export const baseUrl = import.meta.env.VITE_BASEPATH || "http://localhost:5000";

export const paletteColor = {
  light: { displayColor: "#b9b9b9", themeColor: "#0d8ce0" },
  dark: { displayColor: "#292929", themeColor: "#1045a8" },
  purple: { displayColor: "#6310a7", themeColor: "#b559f2" },
  teal: { displayColor: "#0b8286", themeColor: "#12797c" },
};

export const listOfPagesWithRoute = [
  { id: "1", name: "List of Movies", path: "/my-app" },
  { id: "2", name: "Genre", path: "/genres" },
];

export const categoriesOfMovies = ["action", "crime", "drama"];
