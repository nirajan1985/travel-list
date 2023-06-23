export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 far away 🧳</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip 😍?</h3>
    </div>
  );
}
function PackingList() {
  return <diV className="list">item</diV>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have 6 items on your list, and you already packed 0 (0%)</em>
    </footer>
  );
}
