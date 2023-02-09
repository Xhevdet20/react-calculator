import React, {useState} from "react";
import TopBar from "../TopBar/TopBar";
import OutputScreen from "../OutputScreen/OutputScreen";
import InputElements from "../InputElements/InputElements";
import "./Container.css";

export default function Container() {

  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");

  return <div className="container">
    <TopBar />
    <OutputScreen expression={expression} result={result}/>
    <InputElements setExpression={setExpression}  expression={expression} setResult={setResult} />
  </div>;
}
