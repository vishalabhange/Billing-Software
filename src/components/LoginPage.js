import React, { useState } from "react";
import "./loginPage.css"; // Import the CSS file

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic...
    console.log("Logged in successfully!");
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          font: "poppins",
          fontSize: "49px",
        }}
      >
        Login
      </h1>
      <div className="login-container">
        <div className="login-form-container">
          {/* <h2>Login</h2> */}
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              <a href="/home">Login</a>
            </button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
