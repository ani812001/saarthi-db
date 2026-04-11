import { useNavigate } from "react-router-dom";

function Login({ setAuth }) {
  const navigate = useNavigate(); // ✅ MUST be inside component

  const handleLogin = () => {
    setAuth(true);     // login state
    navigate("/");     // redirect to Search page
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>SaarthiDB</h2>

        <input placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button onClick={handleLogin}>Sign in</button>
      </div>
    </div>
  );
}

export default Login;