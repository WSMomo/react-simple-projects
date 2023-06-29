export function Range({ children, value, setValue, min, max }) {
  return (
    <>
      <label for="weight">
        {children} {value}
      </label>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step="1"
        onChange={(e) => setValue(e.target.value)}
        className="range-input"
      />
    </>
  );
}
