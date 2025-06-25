import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import { Link } from "react-router-dom";
import { navItems } from "./Navbar";

type Props = {
  handleDrawerToggle: () => void;
  pathName: string;
  open: boolean;
};

export default function NavDrawer({ handleDrawerToggle, pathName, open }: Props) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
      }}
    >
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", px: 2 }}>
        <Box
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            display: "inline-block",
          }}
        >
          <Box
            component="img"
            src="/icons/cute_cat.png"
            sx={{ width: 100, height: "auto", pt: 4 }}
          />
          <Typography variant="h4" sx={{ pb: 2 }}>
            LISA JING-YANG ZHANG
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "grey.400" }} />
        <List>
          {navItems.map((item) => {
            const selected = item.path === pathName;
            return (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
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
    </Drawer>
  );
}
