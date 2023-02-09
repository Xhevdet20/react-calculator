import React from "react";
import TopBar from "../TopBar/TopBar";
import OutputScreen from "../OutputScreen/OutputScreen";
import InputElements from "../InputElements/InputElements";

import "./Container.css";

export default function Container() {
  return <div className="container">
    <TopBar />
    <OutputScreen />
    <InputElements />
  </div>;
}
