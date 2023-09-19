import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, createTheme } from "@mui/material";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { getPalatteTheme } from "../utils/theme";
import { PaletteTheme } from "../utils/types";

declare module "@mui/material/styles" {
  interface TypeBackground {
    appbar?: string;
  }

  interface TypeText {
    heading?: string;
    link?: string;
    linkBg?: string;
    linkHoverBg?: string;
    textarea?: string;
  }
}

const getDesignTokens = (mode: PaletteTheme) => ({
  palette: getPalatteTheme(mode),
});

const localStoreCache = localStorage.getItem("react-movie-darkmodecache");
const modeInit: PaletteTheme = localStoreCache
  ? (localStoreCache as PaletteTheme)
  : "light";
export const ColorModeContext = createContext({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toggleColorMode: (mode: PaletteTheme) => {},
});

const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteTheme>(modeInit);

  useEffect(() => {
    localStorage.setItem("react-movie-darkmodecache", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (mode: PaletteTheme) => {
        setMode(mode);
      },
    }),
    [mode]
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
