import './App.css';

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// ✅ Named import
import { About } from './pages/About';

import {Projects} from "./pages/Projects";
import Contact from "./pages/Contact";



function App() {
  return (
      <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </>
  );
}

export default App;
