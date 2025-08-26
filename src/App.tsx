import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Paintings from "./pages/Paintings";
import Other from "./pages/Other";
import Attributions from "./pages/Attributions";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Miniatures from "./pages/Miniatures";

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
          width: "100%",
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
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/paintings" element={<Paintings />} />
            <Route path="/projects/miniatures" element={<Miniatures />} />
            <Route path="/projects/other" element={<Other />} />
            <Route path="/attributions" element={<Attributions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
