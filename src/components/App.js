import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form.js";
import PackingList from "./PackingList";
import State from "./State";

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
      //
      // "Are yor sure you want to delete all items?"
      "ایا مطمعن هستید؟؟؟"
      //
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
