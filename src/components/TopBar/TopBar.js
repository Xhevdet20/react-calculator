import React from "react";
import "./TopBar.css";
import toggle from "../../assets/toggle-icon.png";
import toggleLight from "../../assets/toggle-iconWhite.png";
import Drawer from "../Drawer/Drawer";

export default function TopBar({theme, toggleTheme, result}) {
  return (
    <div className="bar">
    <Drawer theme={theme} result={result} />
      <h2>Calculadora</h2>
      <div className="toggle" onClick={() => toggleTheme()}>
        <img src={theme === "dark" ?toggle : toggleLight} alt="toggle" />
      </div>
    </div>
  );
}
