import { useState } from "react";
import Item from "./Item";
const PackingList = ({
  items,
  onHandleDeleteItems,
  onHandleToggleItem,
  setPacked,
  packed,
  onClearHandleButton,
}) => {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            onHandleToggleItem={onHandleToggleItem}
            packed={packed}
            setPacked={setPacked}
            item={item}
            onHandleDeleteItems={onHandleDeleteItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input</option>
          <option value="description">sort alphabetically</option>
          <option value="packed">sort by unpacked</option>
        </select>
        <button onClick={onClearHandleButton}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList