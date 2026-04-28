import { useReducer } from "react";
import { reducer, initialState } from "./DoubleCounterReducres";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Double Counter</h2>

      <h3>Counter A: {state.counterA}</h3>
      <button onClick={() => dispatch({ type: "incrementA" })}>+</button>
      <button onClick={() => dispatch({ type: "decrementA" })}>-</button>

      <h3>Counter B: {state.counterB}</h3>
      <button onClick={() => dispatch({ type: "incrementB" })}>+</button>
      <button onClick={() => dispatch ({ type: "decrementB" })}>
        
        -</button>

      <br />

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default App;