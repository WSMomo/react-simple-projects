import { useState } from "react";
import { Form } from "./Form";

export default function ShoppingList() {
  const [items, setItems] = useState(["milk", "bread", "eggs"]);

  function handleAddItem(newItem) {
    setItems(() => [...items, newItem]);
  }

  function handleDeleteItem(id) {
    setItems(() => items.filter((item, index) => index !== id));
  }

  return (
    <div className="shopping-list-container">
      <h1 className="title">Items To Buy</h1>
      <Form onAddItem={handleAddItem} />
      <ul>
        {items.map((item, index) => (
          <Item
            key={index}
            item={item}
            onDeleteItem={handleDeleteItem}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, index }) {
  return (
    <li className="shopping-list-item">
      <div>{item}</div>
      <button
        className="shopping-list-button"
        onClick={() => onDeleteItem(index)}
      >
        Delete
      </button>
    </li>
  );
}
