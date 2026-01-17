import React from "react";
import "./navbar.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* LEFT LOGO */}
      <div className="nav-left">
        <span className="logo-text">RM</span>
      </div>

      {/* RIGHT ICONS */}
      <div className="nav-right">
        <a
          href="https://www.linkedin.com/in/manogna-rachakonda-587145293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/manogna-717/port-folio-website"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a href="mailto:manognarachakonda32@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
