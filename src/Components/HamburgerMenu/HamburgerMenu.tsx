import "./HamburgerMenu.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect window resize to check if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hide menu on larger screens
  if (!isMobile) return null;

  return (
    <>
      {/* Hamburger Button */}
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="sidebar"
      >
        <button className="close-button" onClick={() => setIsOpen(false)}>
          ✖
        </button>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About me</a>
          <a href="/projects">Projects</a>
          <a href="/skills">Skills</a>
          <a href="/contact">Contact</a>
        </nav>
      </motion.div>

      {/* Background Overlay */}
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}
