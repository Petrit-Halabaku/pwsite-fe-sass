import React from "react";
import ReactDOM from "react-dom";

import "./backdrop.scss";

const Overlay = (props) => {
  const backdrop = <div className="backdrop" onClick={props.onClick}></div>;
  return ReactDOM.createPortal(
    backdrop,
    document.getElementById("backdrop-hook")
  );
};

export default Overlay;
