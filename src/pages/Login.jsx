import { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user === "admin" && pass === "123") {
      alert("Login Success ✅");
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="container">
      <h2>🔐 Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUser(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;