import React from "react";
import ReactDOM from "react-dom";

import "./mobile-menu.scss";

const MobileMenu = (props) => {
  const content = (
    // <div className="slide-in-right">
    <aside className="side-drawer" onClick={props.onClick}>
      {props.children}
    </aside>
    //  </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("mobile-menu"));
};

export default MobileMenu;
