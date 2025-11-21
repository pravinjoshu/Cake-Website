import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/home.jsx";
import  Topbar from "../components/topbar/topbar.jsx"
import  Footer from "../components/footer/footer.jsx"
import "./App.css";
import Carousel from "../components/carousel/carousel.jsx";

function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topbar" element={<Topbar/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/carousel" element={<Carousel/>} />
      </Routes>
    </Router>
  );
}

export default App;
