import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    agree: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData(formData);

    setFormData({
      username: "",
      email: "",
      password: "",
      role: "",
      agree: false,
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <br />

        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>

        <br />

        <div>
          <label>Role:</label>
          <br />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
          </select>
        </div>

        <br />

        <div>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            I agree to the terms
          </label>
        </div>

        <br />

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Submitted Data</h2>

          <p>
            <strong>Username:</strong> {submittedData.username}
          </p>

          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>

          <p>
            <strong>Password:</strong> {submittedData.password}
          </p>

          <p>
            <strong>Role:</strong> {submittedData.role}
          </p>

          <p>
            <strong>Accepted Terms:</strong>{" "}
            {submittedData.agree ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;