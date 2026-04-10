import { useState } from "react";
import API from "./api";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const register = async () => {
    try {
      const res = await API.post("/register", {
        username,
        password,
      });

      setMessage(res.data.message);
    } catch (err) {
      setMessage("Registration failed");
    }
  };

  const login = async () => {
    try {
      const res = await API.post("/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setMessage("Login successful!");
    } catch (err) {
      setMessage("Login failed");
    }
  };

  return (
    <div className="App">
      <h1>Secure Login System</h1>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>

      <p>{message}</p>
    </div>
  );
}

export default App;