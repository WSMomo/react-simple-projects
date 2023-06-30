import { Button } from "./Button";

export function Buttons({ onOperation, onValue }) {
  return (
    <div className="calculator-buttons">
      <div className="calculator-row">
        <Button onValue={onOperation}>AC</Button>
        <Button onValue={onOperation}>+/-</Button>
        <Button onValue={onOperation}>%</Button>
        <Button onValue={onOperation}>/</Button>
      </div>
      <div className="calculator-row">
        <Button onValue={onValue}>7</Button>
        <Button onValue={onValue}>8</Button>
        <Button onValue={onValue}>9</Button>
        <Button onValue={onOperation}>*</Button>
      </div>
      <div className="calculator-row">
        <Button onValue={onValue}>4</Button>
        <Button onValue={onValue}>5</Button>
        <Button onValue={onValue}>6</Button>
        <Button onValue={onOperation}>-</Button>
      </div>
      <div className="calculator-row">
        <Button onValue={onValue}>1</Button>
        <Button onValue={onValue}>2</Button>
        <Button onValue={onValue}>3</Button>
        <Button onValue={onOperation}>+</Button>
      </div>
      <div className="calculator-row">
        <Button onValue={onValue} className="value-0">
          0
        </Button>
        <Button onValue={onValue}>.</Button>
        <Button onValue={onOperation}>=</Button>
      </div>
    </div>
  );
}
