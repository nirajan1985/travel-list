import { useState } from "react";

/* const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
]; */

export default function App() {
  const [items, setItems] = useState([]);
  function addNewItem(newItem) {
    setItems((items) => [...items, newItem]);
  }
  return (
    <div className="app">
      <Logo />
      <Form addNewItem={addNewItem} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 far away 🧳</h1>;
}
function Form({ addNewItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function submitHandle(e) {
    e.preventDefault();

    const newItem = { quantity, description, packed: false, id: Date.now() };
    console.log(newItem);
    addNewItem(newItem);
    setQuantity(1);
    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={submitHandle}>
      <h3>What do you need for your trip 😍?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have 6 items on your list, and you already packed 0 (0%)</em>
    </footer>
  );
}
