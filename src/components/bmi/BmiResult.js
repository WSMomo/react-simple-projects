export function BmiResult({ bmi }) {
  return (
    <div className="bmi-result">
      Your BMI is <p>{bmi.toFixed(2)}</p>
    </div>
  );
}
