import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import State from "./components/State";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    return setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItem = () => {
    const confirmed = window.confirm(
      "Are yor sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };
  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList
          item={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
          onClearItem={handleClearItem}
        />
        <State items={items} />
      </div>
    </>
  );
};

export default App;
