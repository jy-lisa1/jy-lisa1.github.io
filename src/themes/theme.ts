import "@fontsource/oxygen/300.css";
import "@fontsource/oxygen/400.css";
import "@fontsource/oxygen/700.css";
import "@fontsource-variable/josefin-sans"; // Supports weights 100-700
import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: { primary: { main: "#F0EEEA" }, background: { default: "#F8F7F5", paper: "#F8F7F5" } },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: "3.25rem", // 52px
      letterSpacing: "1.5px",
      fontFamily: "Josefin Sans Variable",
    },
    h2: {
      fontWeight: 400,
      fontSize: "2.5rem", // 40px
      letterSpacing: "0px",
      fontFamily: "Josefin Sans Variable",
    },
    h3: {
      fontWeight: 300,
      fontSize: "2rem", // 32px
      letterSpacing: "0px",
      fontFamily: "Josefin Sans Variable",
    },
    h4: {
      fontWeight: 300,
      fontSize: "1.75rem", // 28px
      letterSpacing: "-0.5px",
      fontFamily: "Josefin Sans Variable",
    },
    h5: {
      fontWeight: 300,
      fontSize: "1.5rem", // 24px
      letterSpacing: "0px",
      fontFamily: "Josefin Sans Variable",
    },
    h6: {
      fontWeight: 200,
      fontSize: "1.25rem", // 20px
      letterSpacing: "0.15px",
      fontFamily: "Josefin Sans Variable",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "1.5rem", // 24px
      letterSpacing: "0.15px",
      fontFamily: "Oxygen",
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "1.25rem", // 20px
      letterSpacing: "0.1px",
      fontFamily: "Oxygen",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem", // 16px
      letterSpacing: "0.5px",
      fontFamily: "Oxygen",
    },
    body2: {
      fontWeight: 500,
      fontSize: "0.75rem", // 12px
      letterSpacing: "0.25px",
      fontFamily: "Oxygen",
    },
    button: {
      fontWeight: 500,
      fontSize: "1rem", // 16px
      letterSpacing: "1.25px",
      fontFamily: "Oxygen",
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem", // 12px
      letterSpacing: "0.4px",
      fontFamily: "Oxygen",
    },
    overline: {
      fontWeight: 400,
      fontSize: "0.75rem", // 12px
      letterSpacing: "1.5px",
      fontFamily: "Oxygen",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
