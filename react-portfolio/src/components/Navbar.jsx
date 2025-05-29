import { Link } from "react-router-dom";
import { useState } from 'react';


export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Local state

    // Highlight Active Section (Nav)
    const [activeSection, setActiveSection] = useState('home');

    const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen); // ⬅️ Toggle menu open/close
    };

    const handleClick = (section) => {
        setActiveSection(section);
    };

    return (
        <nav style={{padding: "1rem", backgroundColor: "#66D2ED", color: "white"}}>

            <button onClick={handleToggle}>
                {isMenuOpen ? 'Close' : 'Menu'}
            </button>

            {isMenuOpen && (
            <ul>
                <Link to="/" style={{marginRight: "1rem"}}>Home</Link>
                <Link to="/about" style={{marginRight: "1rem"}}>About</Link>
                <Link to="/projects" style={{marginRight: "1rem"}}>Projects</Link>
                <Link to="/contact" style={{marginRight: "1rem"}}>Contact</Link>  
                <Link to="/api_integration" style={{marginRight: "1rem"}}>API Integration</Link>  
            </ul>
            )}    
        </nav>
    );
}