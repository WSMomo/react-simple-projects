import { useEffect, useState } from "react";
import { Range } from "./Range";
import { BmiResult } from "./BmiResult";

export default function Bmi() {
  const [weight, setWeight] = useState(30);
  const [height, setHeight] = useState(120);
  const [bmi, setBmi] = useState(0);

  useEffect(() => {
    setBmi(() => weight / ((height / 100) * (height / 100)));
  }, [weight, height]);

  return (
    <div className="bmi-container">
      <h1 className="title">BMI Calculator</h1>
      <div className="bmi-range-container">
        <Range value={weight} setValue={setWeight} min={30} max={150}>
          Weight (kg):
        </Range>
        <Range value={height} setValue={setHeight} min={120} max={210}>
          Height (cm):
        </Range>
      </div>
      <BmiResult bmi={bmi} />
    </div>
  );
}
