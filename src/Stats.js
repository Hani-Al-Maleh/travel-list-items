const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start Adding some items to your list</em>
      </p>
    );
  }
  const numItems = items.length;
  const numItemsPacked = items.filter((item) => item.packed).length;
  const percentages = (numItemsPacked / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        {percentages === 100
          ? 'You got everything ready to go ✈️✈️🌴'
          : `You Have ${numItems} items on your list, and you already packed ${numItemsPacked} items (${Math.floor(
              percentages
            )}%)`}
      </em>
    </footer>
  );
};

export default Stats;
