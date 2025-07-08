import { AppBar, Toolbar, Typography, Button, Stack, Box, IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link, Link as RouterLink, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarHeightContext } from "./NavbarHeightContext";
import NavDrawer from "./NavDrawer";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Projects",
    path: "/projects",
    subItems: [
      { label: "View All", path: "/projects" },
      { label: "Paintings", path: "/projects/paintings" },
      { label: "Carvings", path: "/projects/carvings" },
      { label: "Other", path: "/projects/other" },
    ],
  },
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

  return (
    <>
      <NavbarHeightContext.Provider value={navbarHeight}>
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

              {/* Desktop nav */}
              <Stack direction="row" spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
                {navItems.map((item) => {
                  const selected =
                    item.path === pathname || (item.path != "/" && pathname.includes(item.path));
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

          <NavDrawer
            handleDrawerToggle={handleDrawerToggle}
            pathName={pathname}
            open={mobileOpen}
          />
        </Box>
      </NavbarHeightContext.Provider>
    </>
  );
}
