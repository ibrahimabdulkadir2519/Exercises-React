import { useReducer } from "react";
import { formReducer, initialState } from "./FromReducer";

function MultiStep() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const container = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f3f4f6",
    fontFamily: "Arial",
  };

  const card = {
    width: "420px",
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  };

  const title = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#111827",
  };

  const input = {
    width: "90%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    outline: "none",
    fontSize: "14px",
  };

  const button = {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
    fontWeight: "bold",
  };

  const primaryBtn = {
    ...button,
    background: "#2563eb",
    color: "white",
  };

  const backBtn = {
    ...button,
    background: "#e5e7eb",
    color: "#111827",
  };

  const successBtn = {
    ...button,
    background: "#16a34a",
    color: "white",
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={title}>Multi-Step Form</h2>

        {/* STEP 1 */}
        {state.step === 1 && (
          <div>
            <h3>Personal Info</h3>

            <input
              style={input}
              name="firstName"
              placeholder="First Name"
              value={state.formData.firstName}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  payload: {
                    name: e.target.name,
                    value: e.target.value,
                  },
                })
              }
            />

            <input
              style={input}
              name="lastName"
              placeholder="Last Name"
              value={state.formData.lastName}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  payload: {
                    name: e.target.name,
                    value: e.target.value,
                  },
                })
              }
            />

            <button
              style={primaryBtn}
              onClick={() => dispatch({ type: "NEXT_STEP" })}
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {state.step === 2 && (
          <div>
            <h3>Contact Info</h3>

            <input
              style={input}
              name="email"
              placeholder="Email"
              value={state.formData.email}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  payload: {
                    name: e.target.name,
                    value: e.target.value,
                  },
                })
              }
            />

            <input
              style={input}
              name="phone"
              placeholder="Phone"
              value={state.formData.phone}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  payload: {
                    name: e.target.name,
                    value: e.target.value,
                  },
                })
              }
            />

            <button
              style={backBtn}
              onClick={() => dispatch({ type: "PREV_STEP" })}
            >
              Back
            </button>

            <button
              style={primaryBtn}
              onClick={() => dispatch({ type: "NEXT_STEP" })}
            >
              Next
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {state.step === 3 && (
          <div>
            <h3>Review</h3>

            <div
              style={{
                background: "#f9fafb",
                padding: "12px",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            >
              <p>
                <strong>First Name:</strong> {state.formData.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {state.formData.lastName}
              </p>
              <p>
                <strong>Email:</strong> {state.formData.email}
              </p>
              <p>
                <strong>Phone:</strong> {state.formData.phone}
              </p>
            </div>

            <button
              style={backBtn}
              onClick={() => dispatch({ type: "PREV_STEP" })}
            >
              Back
            </button>

            <button style={successBtn}>Confirm</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiStep;
