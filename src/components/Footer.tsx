import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 2,
        fontSize: "0.875rem",
        bgcolor: "primary.main",
      }}
    >
      © {new Date().getFullYear()} Jing-Yang Zhang. All rights reserved.
    </Box>
  );
}
