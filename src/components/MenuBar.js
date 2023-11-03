import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import Icon from '@mui/material/Icon';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/images/logo.svg';
import iconGlobe from '../assets/images/icon-globe.svg';
import '../App.css';


const pages = ['Business Solutions', 'Platform', 'Tailored Solutions', 'Partnerships', 'Media Hub', 'Contact Us', 'Eng'];
const subMenu = ['Horizontal Solutions', 'B2B Platforms', 'Expense Management', 'Procurement', 'Invoice Recognition', 'Timeqode SAF-T', 'RO e-Factura', 'RO e-Transport', 'Mobile SAF', 'Vertical Solutions', 'Banking', 'Healthcare', 'Construction Sites', 'Legal 365', 'Agriculture'];
const theme = createTheme({
  palette: {
    blue: {
      light: '#009FF7',
    },
  },
});

// Split the subMenu into three columns with 5 values each
const columns = [[], [], []];
subMenu.forEach((subPage, index) => {
  const columnIndex = Math.floor(index / 5);
  columns[columnIndex].push(subPage);
});


function MenuBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [hoveredButton, setHoveredButton] = React.useState(null);
  const [submenuAnchors, setSubmenuAnchors] = React.useState({});

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
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

  theme.props = {
    MuiList: {
      onMouseLeave: () => handleCloseSubmenu(hoveredButton),

    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth="xl" sx={{ bgcolor: '#FFFFFF' }}>
        <Box sx={{ flexGrow: 1, justifyContent: 'space-between', alignItems: 'center', display: { xs: 'flex', md: 'none' }, height: '95px', px: 2 }}>
          <Icon sx={{
            display: 'flex',
            width: '168px',
            height: '31px',
          }}>
            <img src={logo} alt="logo" />
          </Icon>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="default"
            edge="end"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ flex: 1, flexGrow: 1, flexDirection: 'column', display: { xs: 'none', md: 'flex' }, alignItems: 'center', bgcolor: '#FFFFFF' }}>
          <Icon sx={{
            marginTop: '48px',
            width: '284px',
            height: '52px',
            opacity: 1,
          }}>
            <img src={logo} className="classes.App-logo" alt="logo" />
          </Icon>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', bgcolor: '#FFFFFF' }}>
            {pages.map((page, index) => (
              <ButtonBase
                disableRipple
                key={page}
                sx={{
                  my: 3, mx: 1, color: '#2D4156', display: 'flex', textTransform: 'capitalize',
                  fontFamily: "Montserrat",
                  fontSize: '20px', padding: '8px',
                  '&:hover': {
                    color: '#009FF7',
                  },
                  
                }}
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onMouseEnter={(event) => handleOpenSubmenu(event, page)}
                onMouseLeave={() => handleCloseSubmenu(page)}
                style={{ zIndex: 1301 }}
                disableElevation
              >
                {page === 'Eng' && <Icon sx={{
                  display: 'flex',
                  paddingRight: '8px',
                  "&:hover": { color: '#009FF7' }
                }}>
                  <img src={iconGlobe} alt="logo" />
                </Icon>}
                {page}
                {page === 'Business Solutions' && <Menu
                  id="menu-appbar"
                  anchorEl={submenuAnchors[page]}
                  open={hoveredButton === page}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '10px'
                  }}>
                    {columns.map((column, columnIndex) => (
                      <div key={columnIndex} style={{ width: '300px' }}>
                        {column.map((subPage, subIndex) => (
                          <ButtonBase
                            disableRipple
                            key={subPage}
                            sx={{
                              color: '#2D4156',
                              display: 'flex',
                              textTransform: 'capitalize',
                              fontSize: '15px',
                              padding: '8px',
                              '&:hover': {
                                color: '#009FF7',
                              },
                              fontFamily: "Montserrat",
                            }}
                            aria-owns={open ? 'menu-appbar' : null}
                            aria-haspopup="true"
                            onMouseOver={(event) => { }}
                            onMouseLeave={() => { }}
                            style={{
                              // zIndex: 1301,
                              textAlign: 'center',
                            }}
                            disableElevation
                          >
                            {subPage}
                          </ButtonBase>
                        ))}
                      </div>
                    ))}
                  </div>
                </Menu>}
              </ButtonBase>
            ))}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default MenuBar;
