import React, { useState } from "react";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import MainHeader from "../header/MainHeader";
import Backdrop from "../UIElements/Backdrop";

import navMesh from "../../../assets/images/png/headerMesh.png";

import "./main-nav.scss";

const MainNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      {drawerOpen && <Backdrop onClick={closeDrawer} />}

      {/* Mobile navigation */}
      {drawerOpen && (
        <MobileMenu onClick={closeDrawer}>
          <nav className="navigation__mobile-nav">
            <NavLinks />
          </nav>
        </MobileMenu>
      )}

      {/* desktop navigation */}
      <MainHeader>
        <div className="navigation__title">
          <a href="#top">Portfolio</a>
        </div>

        {/* mobile width */}
        <div className="navigation__menu-btn" onClick={openDrawer}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <img src={navMesh} alt="nav-mesh" className="navigation__dotted-mesh" />
        <nav className="navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNav;
