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
import { useState } from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", px: 2 }}>
      <Box component="img" src="/cute_cat.png" sx={{ width: 100, height: "auto", pt: 4 }} />
      <Divider sx={{ borderColor: "grey.400" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={RouterLink} to={item.path} sx={{ textAlign: "left" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box component="img" src="/cute_cat.png" sx={{ width: 50, height: "auto" }} />
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
            {navItems.map((item) => (
              <Button key={item.label} color="inherit" component={RouterLink} to={item.path}>
                {item.label}
              </Button>
            ))}
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
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
