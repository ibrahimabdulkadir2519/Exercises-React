import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div>
      <h1>Count: {count}</h1>


      <button onClick={handleIncrement}>
        Increment
      </button>


      <button
        disabled={count === 0}
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;