import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Box,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import { useRef, useState } from "react";
import { Link, Link as RouterLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import NavDrawer from "./NavDrawer";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const projectTypes = [
  { label: "View All", path: "/projects" },
  { label: "Paintings", path: "/projects/paintings" },
  { label: "Carvings", path: "/projects/carvings" },
  { label: "Other", path: "/projects/other" },
];

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Projects",
    path: "/projects",
    subItems: projectTypes,
  },
];

function Underline() {
  return (
    <Box
      className="underline"
      sx={{
        position: "absolute",
        bottom: 4,
        left: 0,
        height: "1px",
        width: "0%",
        backgroundColor: "black",
        transformOrigin: "center",
        transition: "width 0.3s ease",
      }}
    />
  );
}

export default function Navbar() {
  const { pathname } = useLocation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAnchorEl(event.currentTarget);
  };

  const handleDelayedClose = () => {
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 150);
  };

  const cancelClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAnchorEl(null);
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const navbarRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <Box ref={navbarRef}>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  component="img"
                  src="/icons/peeking_cat.png"
                  sx={{ width: 50, height: "auto" }}
                />
                <Typography
                  noWrap
                  variant="h4"
                  sx={{ pt: 0.5, display: { xs: "none", sm: "block" } }}
                >
                  LISA JING-YANG ZHANG
                </Typography>
              </Stack>
            </Link>

            <Stack direction="row" spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
              {navItems.map((item) => {
                const selected =
                  item.path === pathname || (item.path !== "/" && pathname.includes(item.path));
                if (item.path !== "/projects") {
                  return (
                    <Button
                      key={item.label}
                      color="inherit"
                      component={RouterLink}
                      to={item.path}
                      sx={{
                        fontWeight: selected ? "bold" : "normal",
                        textUnderlineOffset: "4px",
                        "&:hover .underline": {
                          width: "100%",
                        },
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      {item.label}
                      <Underline />
                    </Button>
                  );
                }
                return null;
              })}

              <Box onMouseEnter={cancelClose} onMouseLeave={handleDelayedClose}>
                <Button
                  color="inherit"
                  onMouseEnter={handleMouseEnter}
                  sx={{
                    fontWeight: pathname.includes("projects") ? "bold" : "normal",
                    textUnderlineOffset: "4px",
                    "&:hover .underline": {
                      width: "100%",
                    },
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  endIcon={anchorEl ? <ExpandLess /> : <ExpandMore />}
                >
                  Projects
                </Button>

                <Menu
                  id="hover-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  onMouseEnter={cancelClose}
                  onMouseLeave={handleDelayedClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  disableAutoFocus
                  disableEnforceFocus
                  disableScrollLock
                  MenuListProps={{ autoFocusItem: false }}
                >
                  {projectTypes.map((project) => {
                    const selected = pathname === project.path;
                    return (
                      <MenuItem
                        key={project.label}
                        component={RouterLink}
                        to={project.path}
                        onClick={handleClose}
                        sx={{
                          fontWeight: selected ? "bold" : "normal",
                        }}
                      >
                        {project.label}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </Box>
            </Stack>

            <IconButton
              color="inherit"
              edge="start"
              sx={{ display: { md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <NavDrawer handleDrawerToggle={handleDrawerToggle} pathName={pathname} open={mobileOpen} />
      </Box>
    </>
  );
}
