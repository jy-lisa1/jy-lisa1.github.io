import { Box } from "@mui/material";
import { Link } from "react-router-dom";

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
      <Box>© {new Date().getFullYear()} Jing-Yang Zhang. All rights reserved.</Box>
      <Box>
        <Link to="/attributions" style={{ color: "inherit", marginRight: 12 }}>
          Attributions
        </Link>
        <Link to="/contact" style={{ color: "inherit" }}>
          Contact
        </Link>
      </Box>
    </Box>
  );
}
