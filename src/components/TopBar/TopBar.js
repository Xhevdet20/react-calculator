import React from "react";
import "./TopBar.css";
import clock from "../../assets/clock.svg";
import toggle from "../../assets/toggle-icon.png";
import toggleLight from "../../assets/toggle-iconWhite.png";
import clockLight from '../../assets/clock-light.svg';

export default function TopBar({theme, toggleTheme}) {
  return (
    <div className="bar">
      <div className="icon" >
        <img src={theme === "dark" ?  clock : clockLight} alt="clock" />
      </div>
      <h2>Calculadora</h2>
      <div className="toggle" onClick={() => toggleTheme()}>
        <img src={theme === "dark" ?toggle : toggleLight} alt="toggle" />
      </div>
    </div>
  );
}
