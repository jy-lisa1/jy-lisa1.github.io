import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Collapse,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { navItems } from "./Navbar";
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

type Props = {
  handleDrawerToggle: () => void;
  pathName: string;
  open: boolean;
};

export default function NavDrawer({ handleDrawerToggle, pathName, open }: Props) {
  const [openProjects, setOpenProjects] = useState(false);

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
            const selected =
              pathName === item.path ||
              (item.path.includes("/projects") && pathName.includes(item.path));

            if (!item.subItems) {
              return (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton component={Link} to={item.path} sx={{ textAlign: "left" }}>
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
            } else {
              return (
                <Box>
                  <ListItem
                    disablePadding
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenProjects((prev) => !prev);
                    }}
                    secondaryAction={
                      <IconButton edge="end">
                        {openProjects ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    }
                  >
                    <ListItemButton sx={{ textAlign: "left" }}>
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

                  <Collapse in={openProjects} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.subItems.map((subItem) => {
                        const childSelected = pathName === subItem.path;
                        return (
                          <ListItem key={subItem.label} disablePadding>
                            <ListItemButton
                              component={Link}
                              to={subItem.path}
                              sx={{ pl: 4, textAlign: "left" }}
                            >
                              <ListItemText
                                primary={subItem.label}
                                slotProps={{
                                  primary: {
                                    fontWeight: childSelected ? "bold" : "normal",
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
                  </Collapse>
                </Box>
              );
            }
          })}
        </List>
      </Box>
    </Drawer>
  );
}
