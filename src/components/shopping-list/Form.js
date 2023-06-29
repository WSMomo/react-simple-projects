import { useState } from "react";

export function Form({ onAddItem }) {
  const [item, setItem] = useState("");
  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    item && onAddItem(item);
  }

  return (
    <form onSubmit={handleSubmit} className="shopping-list-form">
      <input
        className="shopping-list-input"
        name="new-item"
        type="text"
        placeholder="Add a new item"
        onChange={handleChange}
      />
      <button className="shopping-list-button add-button">Add</button>
    </form>
  );
}
