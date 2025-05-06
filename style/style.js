// Header.js

import React, { useState } from "react";
import "./Header.css"; // لو عندك CSS خاص بالـ Header

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header>
      <div className="nav">
        <a href="#">
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Techtra Logo" />
        </a>
        <ul>
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
          Every challenge is a new opportunity for growth: With our innovative
          technical solutions, we help your company achieve its goals and
          enhance its performance in the market with the highest levels of
          efficiency and professionalism.
        </p>
        <a
          href="#"
          className={`btn ${isHovered ? "hover" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Header;
