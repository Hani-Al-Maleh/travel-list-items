const Item = ({ item, onHandleDeleteItems, onHandleToggleItem }) => {
    return (
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onHandleToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onHandleDeleteItems(item.id)}>❌</button>
      </li>
    );
  };

  export default Item