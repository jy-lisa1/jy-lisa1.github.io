import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        <Navbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
