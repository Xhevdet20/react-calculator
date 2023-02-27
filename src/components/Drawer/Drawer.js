import React, { useEffect, useState } from "react";
import "./Drawer.css"; // Import CSS file
import clockLight from "../../assets/clock-light.svg";
import clock from "../../assets/clock.svg";
import OutputScreen from "../OutputScreen/OutputScreen";
function Drawer({ theme, result }) {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const history = localStorage.getItem("history");
    if (history) {
      setHistory(JSON.parse(history).slice(-5));
    }
  }, [result]);

  return (
    <div className="drawer-container">
      <div className="icon" onClick={handleToggle}>
        <img src={theme === "dark" ? clock : clockLight} alt="clock" />
      </div>
      <div className={`drawer ${isOpen ? "open" : ""}`}>
      <div className="history-button">
      <button onClick={handleToggle} >Close</button>
      </div>
        <ul className="history-list">
          {history.map((element, index) => {
            return (
              <li key={`${element}-${index}`}>
                <OutputScreen
                  expression={element.expression}
                  result={element.result}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
