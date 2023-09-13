import { ThemeProvider } from "@emotion/react";
import { CssBaseline, PaletteMode, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#285395",
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: {
            main: "#285395",
          },
          background: {
            default: grey[900],
            paper: grey[800],
          },
          text: {
            primary: grey[50],
            secondary: grey[200],
          },
        }),
  },
});

const localModeCache = localStorage.getItem("react-movie-darkmodecache");

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const modeInit: PaletteMode = localModeCache === "dark" ? "dark" : "light";
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
