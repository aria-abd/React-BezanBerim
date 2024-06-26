import { useState } from "react";
import Item from "./Item";

const PackingList = ({ item, onDeleteItem, onToggleItem, onClearItem }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = item;
  if (sortBy === "description")
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">به ترتیب ورودی</option>
            <option value="description">به ترتیب الفبا</option>
            <option value="packed">به ترتیب تعداد</option>
            {/* <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option> */}
          </select>
          {/* <button onClick={() => onClearItem()}>Clear list</button> */}
          <button onClick={() => onClearItem()}>پاک کردن</button>
        </div>
      </div>
    </>
  );
};

export default PackingList;
