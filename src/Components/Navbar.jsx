import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">SaarthiDB</div>

      <div className="links">
        <NavLink to="/" className="nav-link">Search</NavLink>
        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        <NavLink to="/login" className="nav-link">Login</NavLink>
      </div>
    </div>
  );
}

export default Navbar;