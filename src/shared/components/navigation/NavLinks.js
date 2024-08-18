import React from "react";

import "./nav-links.scss";

const NavLinks = () => {
  return (
    <ul className="navigation-links">
      <li className="navigation__item">
        <a href="#about">
          <span>About</span>
        </a>
      </li>
      <li className="navigation__item">
        <a href="#portfolio">
          <span>Portfolio</span>
        </a>
      </li>
      <li className="navigation__item">
        <a href="#contact">
          <span>Contact</span>
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
