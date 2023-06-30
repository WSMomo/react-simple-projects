import { useState } from "react";
import { Buttons } from "./Buttons";

export default function Calculator() {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState(null);
  const [lastClicked, setLastClicked] = useState();
  function handleValue(newValue) {
    if (value.toString().length > 6) {
      return;
    }
    if (value === 0) {
      setValue(newValue);
      return;
    }
    console.log(lastClicked);
    if (lastClicked === "=") {
      setLastClicked(null);
      setResult(null);
      setValue(newValue);
      return;
    }

    setValue(() => value + newValue);
  }

  function executeOperation(oper) {
    let newValue;
    switch (oper) {
      case "+":
        newValue = +result + +value;
        break;
      case "-":
        newValue = +result - +value;
        break;
      case "*":
        newValue = +result * +value;
        break;
      case "/":
        newValue = +result / +value;
        break;
      case "%":
        newValue = +result * +value;
        break;
      default:
        break;
    }

    console.log(typeof newValue);
    if (typeof newValue === "number") {
      setValue(newValue);
    } else {
      setValue(0);
    }
  }

  function handleOperation(oper) {
    switch (oper) {
      case "AC":
        setLastClicked(oper);
        setValue(0);
        setResult(null);
        setOperation(null);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
        setLastClicked(oper);
        setOperation(oper);
        setResult(value);
        setValue(0);
        break;
      case "=":
        if (lastClicked !== '"=') {
          setLastClicked(oper);
          executeOperation(operation);
          setResult(null);
          setOperation(null);
        }
        break;
      case "+/-":
        setValue(() => +value * -1);

        break;
      default:
        break;
    }
  }

  return (
    <div className="calculator-container">
      <Screen result={result} operation={operation} value={value} />
      <Buttons onOperation={handleOperation} onValue={handleValue} />
    </div>
  );
}

function Screen({ result, operation, value }) {
  return (
    <div className="calculator-screen">
      <div className="calculator-screen-output">
        {result} {operation}
      </div>
      <div className="calculator-screen-input">{value}</div>
    </div>
  );
}
