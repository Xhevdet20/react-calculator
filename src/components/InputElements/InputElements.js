import React from "react";
import "./InputElements.css";
import blueHex from "../../assets/blueHex.png";
import grayHex from "../../assets/grayHex.png";
import grayHexLight from '../../assets/grayHexWhite.png';

export default function InputElements({
  expression,
  setExpression,
  setResult,
  theme
}) {

  const evaluate = () => {
    try {
      setResult(eval(expression).toString().substring(0, 14));
      const newData = {
        expression,
        result : eval(expression).toString().substring(0, 14)
      }
      
      const history = localStorage.getItem('history');
      if(!history){
        const newArrayString = JSON.stringify([newData]);
        localStorage.setItem('history', newArrayString);
      } else {
        let myArray = JSON.parse(history);
        myArray.push(newData);
        const myArrayString = JSON.stringify(myArray);
        localStorage.setItem('history', myArrayString);
      }
      
      setExpression("");
    } catch (error) {
      setResult("Wrong expression");
      setExpression("");
    }
  }

  const hexSource = theme === "dark"  ?  grayHex : grayHexLight

  return (
    <div className="inputs">
      <div
        onClick={() => {
          setExpression("");
          setResult("");
        }}
      >
        <img src={blueHex} alt="clock" />
        <h3>C</h3>
      </div>
      <div>
        <img src={blueHex} alt="clock" />
        <h3>+/-</h3>
      </div>
      <div>
        <img src={blueHex} alt="clock" />
        <h3>%</h3>
      </div>
      <div
        onClick={() =>
          setExpression(expression.substring(0, expression.length - 1))
        }
      >
        <img src={blueHex} alt="clock" />
        <h3>DEL</h3>
      </div>

      <div onClick={() => setExpression(expression + "7")}>
        <img src={hexSource} alt="clock" />
        <h3>7</h3>
      </div>
      <div onClick={() => setExpression(expression + "8")}>
        <img src={hexSource} alt="clock" />
        <h3>8</h3>
      </div>
      <div onClick={() => setExpression(expression + "9")}>
        <img src={hexSource} alt="clock" />
        <h3>9</h3>
      </div>
      <div onClick={() => setExpression(expression + "/")}>
        <img src={blueHex} alt="clock" />
        <h3>/</h3>
      </div>

      <div onClick={() => setExpression(expression + "4")}>
        <img src={hexSource} alt="clock" />
        <h3>4</h3>
      </div>
      <div onClick={() => setExpression(expression + "5")}>
        <img src={hexSource} alt="clock" />
        <h3>5</h3>
      </div>
      <div onClick={() => setExpression(expression + "6")}>
        <img src={hexSource} alt="clock" />
        <h3>6</h3>
      </div>
      <div onClick={() => setExpression(expression + "*")}>
        <img src={blueHex} alt="clock" />
        <h3>X</h3>
      </div>

      <div onClick={() => setExpression(expression + "1")}>
        <img src={hexSource} alt="clock" />
        <h3>1</h3>
      </div>
      <div onClick={() => setExpression(expression + "2")}>
        <img src={hexSource} alt="clock" />
        <h3>2</h3>
      </div>
      <div onClick={() => setExpression(expression + "3")}>
        <img src={hexSource} alt="clock" />
        <h3>3</h3>
      </div>
      <div onClick={() => setExpression(expression + "-")}>
        <img src={blueHex} alt="clock" />
        <h3>-</h3>
      </div>

      <div onClick={() => setExpression(expression + "0")}>
        <img src={hexSource} alt="clock" />
        <h3>0</h3>
      </div>
      <div onClick={() => setExpression(expression + ".")}>
        <img src={blueHex} alt="clock" />
        <h3>.</h3>
      </div>
      <div
        onClick={() => evaluate()}
      >
        <img src={blueHex} alt="clock" />
        <h3>=</h3>
      </div>
      <div onClick={() => setExpression(expression + "+")}>
        <img src={blueHex} alt="clock" />
        <h3>+</h3>
      </div>
    </div>
  );
}
