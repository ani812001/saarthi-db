function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>SaarthiDB</h2>

        <input placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Login;