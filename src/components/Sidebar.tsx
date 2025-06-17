import { Drawer, Toolbar, Typography, Stack, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6">Hello! 😸</Typography>
      </Toolbar>
      <Box sx={{ px: 2 }}>
        <Stack spacing={2} mt={2}>
          <Button fullWidth variant="text" color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button fullWidth variant="text" color="inherit" component={RouterLink} to="/about">
            About
          </Button>
          <Button fullWidth variant="text" color="inherit" component={RouterLink} to="/projects">
            Projects
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
}
