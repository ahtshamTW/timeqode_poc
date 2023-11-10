import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Container from "@mui/material/Container";
import ButtonBase from "@mui/material/ButtonBase";
import Icon from "@mui/material/Icon";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/images/logo.svg";
import iconGlobe from "../assets/images/icon-globe.svg";
import iconGlobeSelected from "../assets/images/icon-globe-selected.svg";
import "../App.css";
import { ClickAwayListener, Popper } from "@mui/base";
import { Collapse, MenuList } from "@mui/material";

const pages = [
  "Business Solutions",
  "Platform",
  "Tailored Solutions",
  "Partnerships",
  "Media Hub",
  "Contact Us",
  "Eng",
];
const subMenu = [
  "Horizontal Solutions",
  "B2B Platforms",
  "Expense Management",
  "Procurement",
  "Invoice Recognition",
  "Timeqode SAF-T",
  "RO e-Factura",
  "RO e-Transport",
  "Mobile SAF",
  "Vertical Solutions",
  "Banking",
  "Healthcare",
  "Construction Sites",
  "Legal 365",
  "Agriculture",
];

// Split the subMenu into three columns with 5 values each
const columns = [[], [], []];
subMenu.forEach((subPage, index) => {
  const columnIndex = Math.floor(index / 5);
  columns[columnIndex].push(subPage);
});

function MenuBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [hoveredButton, setHoveredButton] = React.useState(null);
  const [submenuAnchors, setSubmenuAnchors] = React.useState({});
  const [openSubmenu, setOpenSubmenu] = React.useState(false);
  const [selectedPage, setSelectedPage] = React.useState(null);

  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            [theme.breakpoints.down("sm")]: {
              left: "0px !important",
              maxWidth: "100% !important",
              maxHeight: openSubmenu && "100% !important",
            },
          }),
        },
      },
    },
  });
  const handleToggle = (event) => {
    if (anchorEl) {
      handleCloseNavMenu();
    } else {
      handleOpenNavMenu(event);
    }
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setSelectedPage(null);
    setAnchorEl(null);
  };

  const handleOpenSubmenu = (event, page) => {
    setSubmenuAnchors({ ...submenuAnchors, [page]: event.currentTarget });
    setHoveredButton(page);
  };

  const handleCloseSubmenu = (page) => {
    setSubmenuAnchors({ ...submenuAnchors, [page]: null });
    setHoveredButton(null);
  };

  const getSelectedColor = (page) => {
    return selectedPage == page ? "#009FF7" : "#2D4156";
  };

  theme.props = {
    MuiList: {
      onMouseLeave: () => handleCloseSubmenu(hoveredButton),
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ bgcolor: "transparent", boxShadow: "none", zIndex: 9999 }}
      >
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
            display: { xs: "flex", md: "none" },
            height: "95px",
            px: 2,
          }}
        >
          <Icon
            sx={{
              display: "flex",
              width: "168px",
              height: "31px",
            }}
          >
            <img src={logo} alt="logo" />
          </Icon>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            onClick={handleToggle}
            color="default"
            edge="end"
          >
            <MenuIcon htmlColor="#1488E4" fontSize="32px" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorEl)}
            onClose={handleCloseNavMenu}
            sx={{
              padding: "0px",
              margin: "0px",
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuList
              autoFocusItem={open}
              id="composition-menu"
              aria-labelledby="composition-button"
              // onKeyDown={handleListKeyDown}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    setSelectedPage(page);
                    if (page == "Business Solutions") {
                      setOpenSubmenu(!openSubmenu);
                    }
                    // else {
                    //   handleCloseNavMenu()
                    // }
                  }}
                  sx={{
                    width: "400px",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="body"
                    fontSize={"20px"}
                    sx={{
                      display: "flex",
                      alignSelf: "center",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    fontFamily={"Montserrat"}
                    color={getSelectedColor(page)}
                    textAlign="center"
                  >
                    {page === "Eng" && (
                      <Icon
                        sx={{
                          display: "flex",
                          paddingRight: "8px",
                          "&:hover": { color: getSelectedColor(page) },
                        }}
                      >
                        <img
                          src={
                            selectedPage == "Eng"
                              ? iconGlobeSelected
                              : iconGlobe
                          }
                          alt="globe"
                        />
                      </Icon>
                    )}
                    {page}
                    {page === "Business Solutions" ? (
                      openSubmenu ? (
                        <ExpandLessIcon
                          htmlColor={getSelectedColor(page)}
                          fontSize="32px"
                        />
                      ) : (
                        <ExpandMoreIcon
                          htmlColor={getSelectedColor(page)}
                          fontSize="32px"
                        />
                      )
                    ) : null}
                  </Typography>

                  {page == "Business Solutions" && (
                    <Collapse
                      in={openSubmenu}
                      timeout="auto"
                      unmountOnExit
                      sx={{}}
                    >
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                      >
                        {subMenu.map((page) => (
                          <MenuItem
                            key={page}
                            // onClick={handleClose}
                            sx={{ width: "400px", justifyContent: "center" }}
                          >
                            <Typography
                              variant="body"
                              sx={{
                                alignSelf: "center",
                              }}
                              fontFamily={"Montserrat"}
                              color={"#2D4156"}
                              textAlign="center"
                            >
                              {page}
                            </Typography>
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Collapse>
                  )}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>

        <Box
          sx={{
            flex: 1,
            flexGrow: 1,
            flexDirection: "column",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            bgcolor: "transparent",
          }}
        >
          <Icon
            sx={{
              marginTop: "48px",
              width: "284px",
              height: "52px",
              opacity: 1,
            }}
          >
            <img src={logo} alt="logo" />
          </Icon>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              bgcolor: "transparent",
            }}
          >
            {pages.map((page, index) => (
              <ButtonBase
                disableRipple
                key={page}
                sx={{
                  my: 3,
                  mx: 1,
                  color: "#2D4156",
                  display: "flex",
                  textTransform: "capitalize",
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  padding: "8px",
                  "&:hover": {
                    color: "#009FF7",
                  },
                }}
                aria-owns={open ? "menu-appbar" : null}
                aria-haspopup="true"
                onMouseEnter={(event) => handleOpenSubmenu(event, page)}
                onMouseLeave={() => handleCloseSubmenu(page)}
                style={{ zIndex: 1301 }}
                disableElevation
              >
                {page === "Eng" && (
                  <Icon
                    sx={{
                      display: "flex",
                      paddingRight: "8px",
                    }}
                  >
                    <img
                      src={
                        hoveredButton == "Eng" ? iconGlobeSelected : iconGlobe
                      }
                      alt="logo"
                    />
                  </Icon>
                )}
                {page}
                {page === "Business Solutions" && (
                  <Menu
                    id="menu-appbar"
                    anchorEl={submenuAnchors[page]}
                    open={hoveredButton === page}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    sx={{
                      marginTop: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "16px",
                      }}
                    >
                      {columns.map((column, columnIndex) => (
                        <div key={columnIndex} style={{ width: "360px" }}>
                          {column.map((subPage, subIndex) => (
                            <ButtonBase
                              disableRipple
                              key={subPage}
                              sx={{
                                color: "#2D4156",
                                display: "flex",
                                textTransform: "capitalize",
                                fontSize: "15px",
                                padding: "8px",
                                paddingLeft: "16px",
                                "&:hover": {
                                  color: "#009FF7",
                                },
                                fontFamily: "Montserrat",
                              }}
                              aria-owns={open ? "menu-appbar" : null}
                              aria-haspopup="true"
                              onMouseOver={(event) => {}}
                              onMouseLeave={() => {}}
                              style={{
                                textAlign: "center",
                              }}
                              disableElevation
                            >
                              {subPage}
                            </ButtonBase>
                          ))}
                        </div>
                      ))}
                    </div>
                  </Menu>
                )}
              </ButtonBase>
            ))}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default MenuBar;
