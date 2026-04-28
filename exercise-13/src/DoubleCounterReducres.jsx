export const initialState = {
  counterA: 0,
  counterB: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "incrementA":
      return { ...state, counterA: state.counterA + 1 };

    case "decrementA":
      return { ...state, counterA: state.counterA - 1 };

    case "incrementB":
      return { ...state, counterB: state.counterB + 1 };

    case "decrementB":
      return { ...state, counterB: state.counterB - 1 };

    case "reset":
      return initialState;

    default:
      return state;
  }
};