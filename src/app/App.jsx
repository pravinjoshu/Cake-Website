import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../home.jsx";
import  Topbar from "../components/topbar/topbar.jsx"
import  Footer from "../components/footer/footer.jsx"
import Category from "../components/categories/category.jsx"
import "./App.css";

function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topbar" element={<Topbar/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/category" element={<Category />} />

      </Routes>
    </Router>
  );
}

export default App;
