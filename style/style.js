import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className={`nav ${navbarScrolled ? "scrolled" : ""}`}>
        <a href="#">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="Techtra Logo"
            className="logo w-100"
          />
        </a>
        <div
          className="menu-icon"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          &#9776;
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>
          Welcome to <span className="span">Techtra</span> company
        </h1>
        <p>
          Every challenge is a new opportunity for growth. With our innovative
          technical solutions, we help your company achieve its goals and
          enhance its market performance with efficiency and professionalism.
        </p>
        <a href="#" className="btn">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
