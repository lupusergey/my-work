import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Project/:id" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
