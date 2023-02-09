import React from "react";
import "./InputElements.css";
import blueHex from "../../assets/blueHex.png";
import grayHex from "../../assets/grayHex.png";

export default function InputElements() {
  return (
    <div className="inputs">
      <div>
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
      <div>
        <img src={blueHex} alt="clock" />
        <h3>DEL</h3>
      </div>

      <div>
        <img src={grayHex} alt="clock" />
        <h3>7</h3>
      </div>
      <div>
        <img src={grayHex} alt="clock" />
        <h3>8</h3>
      </div>
      <div>
        <img src={grayHex} alt="clock" />
        <h3>9</h3>
      </div>
      <div>
        <img src={blueHex} alt="clock" />
        <h3>/</h3>
      </div>

      <div>
        <img src={grayHex} alt="clock" />
        <h3>4</h3>
      </div>
      <div>
        <img src={grayHex} alt="clock" />
        <h3>5</h3>
      </div>
      <div>
        <img src={grayHex} alt="clock" />
        <h3>6</h3>
      </div>
      <div>
        <img src={blueHex} alt="clock" />
        <h3>X</h3>
      </div>

      <div>
        <img src={grayHex} alt="clock" />
        <h3>1</h3>
      </div>
      <div>
        <img src={grayHex} alt="clock" />
        <h3>2</h3>
      </div>
      <div>
        <img src={grayHex} alt="clock" />
        <h3>3</h3>
      </div>
      <div>
        <img src={blueHex} alt="clock" />
        <h3>-</h3>
      </div>

      <div>
        <img src={grayHex} alt="clock" />
        <h3>0</h3>
      </div>
      <div>
        <img src={blueHex} alt="clock" />
        <h3>.</h3>
      </div>
      <div>
        <img src={blueHex} alt="clock" />
        <h3>=</h3>
      </div>
      <div>
        <img src={blueHex} alt="clock" />
        <h3>+</h3>
      </div>
    </div>
  );
}
