import React, { useState } from "react";
import "./App.css";


function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      disabled
      aria-label="display"
    />
  );
}


function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  const SUBJECT = "C-PCIT9"; 

  const mapping = {
    "1": "Being On Time",
    "2": "Making An Effort",
    "3": "Being High Energy",
    "4": "Having A Positive Attitude",
    "5": "Being Passionate",
    "6": "Using Good Body Language",
    "7": "Being Coachable",
    "8": "Doing A Little Extra",
    "9": "Being Prepared",
    "0": "Having A Strong Work Ethic",
    "NAME": "LIANDREI LUMBA",
    "SUBJ": SUBJECT.toUpperCase(),
  };

  const [displayValue, setDisplayValue] = useState("10 Things That Require Zero Talent");

  const handleClick = (label) => {
    const value = mapping[label] ?? "";
    setDisplayValue(value);
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="header">LIANDREI LUMBA - IT3A</h1>
        <Display value={displayValue} />
        <div className="buttons">
          <Button label="7" onClick={() => handleClick("7")} />
          <Button label="8" onClick={() => handleClick("8")} />
          <Button label="9" onClick={() => handleClick("9")} />

          <Button label="4" onClick={() => handleClick("4")} />
          <Button label="5" onClick={() => handleClick("5")} />
          <Button label="6" onClick={() => handleClick("6")} />

          <Button label="1" onClick={() => handleClick("1")} />
          <Button label="2" onClick={() => handleClick("2")} />
          <Button label="3" onClick={() => handleClick("3")} />

          <Button label="NAME" onClick={() => handleClick("NAME")} />
          <Button label="0" onClick={() => handleClick("0")} />
          <Button label="SUBJ" onClick={() => handleClick("SUBJ")} />
        </div>
      </div>
    </div>
  );
}