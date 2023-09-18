import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, MouseEvent, useContext } from "react";
import { AccountCircle } from "@mui/icons-material";
import MovieIcon from "@mui/icons-material/Movie";
import { Container, Menu, MenuItem, Button, Stack, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { ColorModeContext } from "../context/ThemeMode";
import { PaletteTheme } from "../utils/types";
import { listOfPages, paletteColor } from "../utils/constants";
import { LightenColor, makeFirstLetterCapital } from "../utils/helper";

export default function Navbar() {
  const context = useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElTheme, setAnchorElTheme] = useState<null | HTMLElement>(null);
  const paletteThemes = Object.keys(paletteColor);
  const pages = listOfPages;

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const open = Boolean(anchorElTheme);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElTheme(event.currentTarget);
    console.log(event.currentTarget);
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
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "sans-serif",
              fontWeight: 700,
              letterSpacing: "0.2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MOVIES
          </Typography>

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
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "sans-serif",
              fontWeight: 700,
              letterSpacing: "0.2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MOVIES
          </Typography>
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
                  margin: 0,
                  padding: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  transform: "translate(-30px, 5px)",
                }}
              >
                <Grid
                  container
                  px={1}
                  width={350}
                  gap={0}
                  sx={{
                    display: { sm: "flex", xs: "none" },
                  }}
                >
                  {paletteThemes.map((item, index) => {
                    const color = item as keyof typeof paletteColor;

                    return (
                      <Grid
                        item
                        flex={1}
                        md={6}
                        height={50}
                        key={index}
                        onClick={() => handleChooseTheme(item)}
                        sx={{
                          backgroundColor: paletteColor[color],
                          color: color !== "light" ? "white" : "black",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          "&:hover": {
                            backgroundColor: LightenColor(
                              paletteColor[color] as string,
                              10
                            ),
                          },
                        }}
                      >
                        {makeFirstLetterCapital(color)}
                      </Grid>
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
                sx={{ display: { sm: "none", xs: "block" } }}
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
                  paddingTop: 0,
                  paddingBottom: 0,
                  transform: "translate(0px, 12px)",
                  display: { sm: "none", xs: "flex" },
                  alignItems: "center",
                }}
              >
                <Grid
                  container
                  px={1}
                  width={200}
                  direction="column"
                  gap={0}
                  sx={{
                    display: { sm: "none", xs: "flex" },
                  }}
                >
                  {paletteThemes.map((item, index) => {
                    const color = item as keyof typeof paletteColor;

                    return (
                      <Grid
                        item
                        flex={1}
                        xs={12}
                        py={2}
                        height={300}
                        key={index}
                        onClick={() => handleChooseTheme(item)}
                        sx={{
                          backgroundColor: paletteColor[color],
                          color: color !== "light" ? "white" : "black",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          "&:hover": {
                            backgroundColor: LightenColor(
                              paletteColor[color] as string,
                              10
                            ),
                          },
                        }}
                      >
                        {makeFirstLetterCapital(color)}
                      </Grid>
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
