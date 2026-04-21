import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);
      setAuth(true);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p
          style={{ marginTop: "10px", cursor: "pointer" }}
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Sign up
        </p>
      </div>
    </div>
  );
}

export default Login;