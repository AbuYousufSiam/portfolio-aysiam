import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { About } from './pages/About';
import {Projects} from "./pages/Projects";
import Contact from "./pages/Contact";
import API_integration from "./pages/API_integration";

function App() {
  return (
      <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/api_integration' element={<API_integration />} />
      </Routes>
      </>
  );
}

export default App;
