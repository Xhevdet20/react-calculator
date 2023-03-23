import React, { useEffect, useState } from "react";
import TopBar from "../TopBar/TopBar";
import OutputScreen from "../OutputScreen/OutputScreen";
import InputElements from "../InputElements/InputElements";
import "./Container.css";

export default function Container() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem('calculadoraMode', "dark");
    } else {
      setTheme("light");
      localStorage.setItem('calculadoraMode', "light");
    }
  };



  useEffect(() => {
    const calculadoraMode = localStorage.getItem("calculadoraMode");
    if (calculadoraMode) {
      setTheme(calculadoraMode)
    } else {
      setTheme("light")
      localStorage.setItem('calculadoraMode', theme);
    }
  }, [theme]);

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
