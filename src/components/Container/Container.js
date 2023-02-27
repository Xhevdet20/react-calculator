import React, { useState } from "react";
import TopBar from "../TopBar/TopBar";
import OutputScreen from "../OutputScreen/OutputScreen";
import InputElements from "../InputElements/InputElements";
import "./Container.css";

export default function Container() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      className={`${theme === "light" ? "light-mode" : "dark-mode"} container`}
    >
      <TopBar theme={theme} toggleTheme={toggleTheme} result={result} />
      <OutputScreen expression={expression} result={result} theme={theme} />
      <InputElements
        setExpression={setExpression}
        expression={expression}
        result={result}
        setResult={setResult}
        theme={theme}
      />
    </div>
  );
}
