import React from "react";
import "./TopBar.css";
import clock from "../../assets/clock.svg";
import toggle from "../../assets/toggle-icon.png";

export default function TopBar() {
  return (
    <div className="bar">
      <div className="icon">
        <img src={clock} alt="clock" />
      </div>
      <h2>Calculadora</h2>
      <div className="toggle">
        <img src={toggle} alt="toggle" />
      </div>
    </div>
  );
}
