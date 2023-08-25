import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
const App = () => {
  const [items, setItems] = useState([]);
  const handlAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearHandleButton = () => {
    if (!items.length) {
      return;
    }
    const confirmed = window.confirm('Are you sure you want delete all items?');

    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onHandleAddItems={handlAddItems} />
      <PackingList
        onHandleToggleItem={handleToggleItem}
        items={items}
        onHandleDeleteItems={handleDeleteItems}
        onClearHandleButton={clearHandleButton}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
