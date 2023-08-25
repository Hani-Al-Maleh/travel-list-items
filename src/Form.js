import { useState } from 'react';
const Form = ({ onHandleAddItems }) => {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmition = (e) => {
    e.preventDefault();
    if (!description) {
      return;
    }

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onHandleAddItems(newItem);
    setDescription('');
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmition}>
      <h3>What do you need for your trip ?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
          return (
            <option key={num} value={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        required
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
