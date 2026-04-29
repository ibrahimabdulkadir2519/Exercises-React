export const initialState = {
  step: 1,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
};

export function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1,
      };

    case "PREV_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}
