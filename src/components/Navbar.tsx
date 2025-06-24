import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton,
  Divider,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link, Link as RouterLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarHeightContext } from "./NavbarHeightContext";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setNavbarHeight(entry.contentRect.height);
        }
      });
      resizeObserver.observe(navbarRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", px: 2 }}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Box component="img" src="/cute_cat.png" sx={{ width: 100, height: "auto", pt: 4 }} />
      </Link>
      <Typography variant="h4" sx={{ pb: 2 }}>
        LISA JING-YANG ZHANG
      </Typography>
      <Divider sx={{ borderColor: "grey.400" }} />
      <List>
        {navItems.map((item) => {
          const selected = item.path === pathname;
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                sx={{
                  textAlign: "left",
                }}
              >
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      fontWeight: selected ? "bold" : "normal",
                      sx: {
                        transition: "all 0.3s ease",
                      },
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <NavbarHeightContext.Provider value={navbarHeight}>
        <Box ref={navbarRef}>
          <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box component="img" src="/peeking_cat.png" sx={{ width: 50, height: "auto" }} />
                  <Typography
                    noWrap
                    variant="h4"
                    sx={{ pt: 0.5, display: { xs: "none", sm: "block" } }}
                  >
                    LISA JING-YANG ZHANG
                  </Typography>
                </Stack>
              </Link>

              {/* Desktop nav */}
              <Stack direction="row" spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
                {navItems.map((item) => {
                  const selected = item.path === pathname;
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
                    </Button>
                  );
                })}
              </Stack>

              {/* Mobile menu icon */}
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

          {/* Mobile drawer */}
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </NavbarHeightContext.Provider>
    </>
  );
}
