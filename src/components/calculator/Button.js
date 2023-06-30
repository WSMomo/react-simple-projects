export function Button({ children, className, onValue }) {
  function handleClick(e) {
    onValue(e.target.value);
  }

  return (
    <button
      value={children}
      className={`calculator-button ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
