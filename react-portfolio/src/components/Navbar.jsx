import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "API Integration", path: "/api_integration" },
  ];

  // Update windowWidth on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle mobile menu
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const handleClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav style={styles.navbar}>
      {/* Overlay for blur */}
      {isMenuOpen && windowWidth < 768 && (
        <div style={styles.overlay} onClick={handleToggle}></div>
      )}

      <div style={styles.container}>
        {/* Logo */}
        <h2 style={styles.logo}>Siam's Portfolio</h2>

        {/* Desktop Links */}
        {windowWidth >= 768 && (
          <ul style={styles.desktopNav}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  style={{
                    ...styles.link,
                    ...(location.pathname === link.path ? styles.activeLink : {}),
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Hamburger */}
        {windowWidth < 768 && (
          <button onClick={handleToggle} style={styles.hamburger} aria-label="Toggle menu">
            {isMenuOpen ? "✖" : "☰"}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && windowWidth < 768 && (
        <ul style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={handleClick}
                style={{
                  ...styles.link,
                  ...(location.pathname === link.path ? styles.activeLink : {}),
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#0077b6",
    color: "white",
    padding: "1rem 2rem",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  desktopNav: {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
    margin: 0,
    padding: 0,
  },
  hamburger: {
    fontSize: "1.6rem",
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    zIndex: 12,
  },
  mobileMenu: {
    position: "absolute",
    top: "70px",
    right: "2rem",
    backgroundColor: "#0077b6",
    listStyle: "none",
    padding: "1rem",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "1rem",
    borderRadius: "6px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    zIndex: 12,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: 500,
    transition: "color 0.3s",
  },
  activeLink: {
    color: "#ffd166",
    borderBottom: "2px solid #ffd166",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 10,
  },
};
