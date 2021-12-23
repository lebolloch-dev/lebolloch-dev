import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  // const [showLinks, setShowLinks] = useState(false);

  // const handleShowLinks = () => {
  //   setShowLinks(!showLinks);
  // };

  return (
    <>
      <ul className="ul-desktop">
        <li>
          <a
            href="https://www.linkedin.com/in/guillaume-le-bolloch/"
            rel="noopener noreferrer"
            target="_blank"
            title="LinkedIn"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/lebolloch-dev"
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/lebolloch_dev/"
            rel="noopener noreferrer"
            target="_blank"
            title="Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Nav;
