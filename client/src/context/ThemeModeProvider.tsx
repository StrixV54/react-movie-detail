import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, PaletteMode, createTheme } from "@mui/material";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

declare module "@mui/material/styles" {
  interface TypeBackground {
    appbar?: string;
  }

  interface TypeText {
    heading?: string;
    link?: string;
    textarea?: string;
  }
}

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#285395",
          },
          background: {
            appbar: "#285395",
            default: "#ececec",
          },
          text: {
            heading: "#13679f",
            link: "#13679f",
            textarea: "#525252",
          },
        }
      : {
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
            textarea: "#c7c7c7",
          },
        }),
  },
});

const localStoreCache = localStorage.getItem("react-movie-darkmodecache");
const modeInit: PaletteMode = localStoreCache === "dark" ? "dark" : "light";
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>(modeInit);

  useEffect(() => {
    localStorage.setItem("react-movie-darkmodecache", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeModeProvider;
