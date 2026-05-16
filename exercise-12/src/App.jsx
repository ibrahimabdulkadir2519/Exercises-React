import { useCounter } from './hooks/useCounter';

function App() {
  const { count, increment, decrement } = useCounter(0, 0);

  return (
    <div>
      <h1>Count: {count}</h1>


      <button onClick={increment}>
        Increment
      </button>


      <button
        disabled={count === 0}
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;