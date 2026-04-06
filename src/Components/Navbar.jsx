import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.body.classList.toggle("light");
    setDark(!dark);
  };

  return (
    <div className="navbar">
      <h2 className="logo">Saarthi</h2>

      <div className="links">
        <NavLink to="/" className="nav-link">Search</NavLink>
        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        <NavLink to="/login" className="nav-link">Login</NavLink>

        <button onClick={toggleTheme}>
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;