import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography, { TypographyProps } from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, MouseEvent, useContext } from "react";
import { AccountCircle } from "@mui/icons-material";
import MovieIcon from "@mui/icons-material/Movie";
import {
  Container,
  Menu,
  MenuItem,
  Button,
  Grid,
  lighten,
  GridProps,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../context/ThemeMode";
import { PaletteTheme } from "../utils/types";
import {
  COLOR_CONSTANTS,
  LIST_OF_PAGES_AND_ROUTES,
  PALETTE_COLOR,
} from "../utils/constants";

const LogoTypography = (props: TypographyProps) => (
  <Typography
    variant={props.variant ?? "h6"}
    noWrap
    component="a"
    href="/"
    sx={{
      mr: props.mr ?? 0,
      display: props.display,
      flexGrow: props.flexGrow ?? 0,
      fontFamily: "sans-serif",
      fontWeight: 700,
      letterSpacing: "0.2rem",
      color: "inherit",
      textDecoration: "none",
    }}
  >
    {props.children}
  </Typography>
);

const ThemeGrid = (props: GridProps) => (
  <Grid
    item
    paddingTop={0}
    md={props.md ?? 12}
    height={50}
    py={props.py ?? 0}
    key={props.key}
    onClick={props.onClick}
    sx={{
      backgroundColor: props.bgcolor ?? COLOR_CONSTANTS.GRAY,
      color: props.color !== "light" ? "white" : "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textTransform: "capitalize",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: lighten(
          (props.bgcolor as string) ?? COLOR_CONSTANTS.GRAY,
          0.2
        ),
      },
    }}
  >
    {props.children}
  </Grid>
);

export default function Navbar() {
  const context = useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElTheme, setAnchorElTheme] = useState<null | HTMLElement>(null);
  const paletteThemes = Object.keys(PALETTE_COLOR);
  const pages = LIST_OF_PAGES_AND_ROUTES;
  const open = Boolean(anchorElTheme);

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElTheme(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseTheme = () => {
    setAnchorElTheme(null);
  };

  const handleChooseTheme = (mode: string) => {
    context.toggleColorMode(mode as PaletteTheme);
    handleCloseTheme();
  };

  return (
    <AppBar
      position="static"
      sx={{ paddingY: "4px", bgcolor: "background.appbar" }}
      color="primary"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MovieIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <LogoTypography display={{ xs: "none", md: "flex" }} mr={2}>
            MOVIES
          </LogoTypography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  to={page.path}
                  key={page.id}
                  className="link-to-route-menulist"
                  style={{ color: "inherit" }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>{page.name}</MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <MovieIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <LogoTypography
            display={{ xs: "flex", md: "none" }}
            variant="h5"
            flexGrow={1}
          >
            MOVIES
          </LogoTypography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: "10px",
            }}
          >
            {pages.map((page) => (
              <Link
                to={page.path}
                key={page.id}
                className="link-to-route"
                style={{ color: "inherit" }}
              >
                <MenuItem onClick={handleCloseNavMenu}>{page.name}</MenuItem>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: { sm: "flex", xs: "none" },
                alignItems: "center",
              }}
            >
              <Button
                id="basic-button"
                aria-haspopup="true"
                onClick={handleClick}
                sx={{
                  color: "inherit",
                  px: 3,
                }}
              >
                Theme
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElTheme}
                open={open}
                onClose={handleCloseTheme}
                sx={{
                  transform: "translate(-30px, 5px)",
                  display: { sm: "flex", xs: "none" },
                  "& > .MuiPopover-paper > ul": {
                    margin: 0,
                    padding: 0,
                  },
                }}
              >
                <Grid
                  container
                  p={1}
                  width={350}
                  gap={0}
                  bgcolor={COLOR_CONSTANTS.GRAY}
                >
                  {paletteThemes.map((item, index) => {
                    const color = item as keyof typeof PALETTE_COLOR;

                    return (
                      <ThemeGrid
                        md={6}
                        onClick={() => handleChooseTheme(item)}
                        key={index}
                        color={color}
                        bgcolor={PALETTE_COLOR[color].displayColor}
                      >
                        {color}
                      </ThemeGrid>
                    );
                  })}
                </Grid>
              </Menu>
            </Box>
            <Typography p="3px" sx={{ display: { sm: "block", xs: "none" } }}>
              Shrikant
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                Profile
                <Typography sx={{ display: { sm: "none", xs: "block" } }}>
                  &nbsp; - Shrikant
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem
                sx={{
                  display: { sm: "none", xs: "flex" },
                  alignItems: "center",
                }}
                onClick={handleClick}
              >
                Theme
              </MenuItem>

              <Menu
                id="basic-menu"
                anchorEl={anchorElTheme}
                open={open}
                onClose={handleCloseTheme}
                sx={{
                  margin: 0,
                  padding: 0,
                  transform: "translate(0px, 12px)",
                  display: { sm: "none", xs: "flex" },
                  alignItems: "center",
                  "& > .MuiPopover-paper > ul": {
                    margin: 0,
                    padding: 0,
                  },
                }}
              >
                <Grid
                  container
                  p={1}
                  width={200}
                  direction="column"
                  gap={0}
                  bgcolor={COLOR_CONSTANTS.GRAY}
                >
                  {paletteThemes.map((item, index) => {
                    const color = item as keyof typeof PALETTE_COLOR;

                    return (
                      <ThemeGrid
                        key={index}
                        color={color}
                        py={2}
                        bgcolor={PALETTE_COLOR[color].displayColor}
                        onClick={() => handleChooseTheme(item)}
                      >
                        {color}
                      </ThemeGrid>
                    );
                  })}
                </Grid>
              </Menu>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
