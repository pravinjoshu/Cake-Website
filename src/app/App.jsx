import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../home.jsx";
import  Topbar from "../components/topbar/topbar.jsx"
import  Footer from "../components/footer/footer.jsx"
import "./App.css";

function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topbar" element={<Topbar/>} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
    </Router>
  );
}

export default App;
