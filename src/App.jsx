import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BlogDay1 from "./pages/BlogDay1";
import BlogDay2 from "./pages/BlogDay2";
import BlogDay3 from "./pages/BlogDay3";
import BlogDay4 from "./pages/BlogDay4";
import BlogDay5 from "./pages/BlogDay5";
import BlogDay6_7 from "./pages/BlogDay6_7";
import Footer from "./components/Footer";
import { useEffect } from "react";

// ScrollToTop component to handle scrolling on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/day1" element={<BlogDay1 />} />
        <Route path="/day2" element={<BlogDay2 />} />
        <Route path="/day3" element={<BlogDay3 />} />
        <Route path="/day4" element={<BlogDay4 />} />
        <Route path="/day5" element={<BlogDay5 />} />
        <Route path="/day6-7" element={<BlogDay6_7 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
