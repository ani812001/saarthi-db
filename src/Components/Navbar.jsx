import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">SaarthiDB</div>

      <div className="links">
        <NavLink to="/" className="nav-link">Search</NavLink>
        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
        <NavLink to="/companies" className="nav-link">Companies</NavLink>
        <NavLink to="/institutes" className="nav-link">Institutes</NavLink>
        <NavLink to="/reports" className="nav-link">Reports</NavLink>
      </div>
    </div>
  );
}

export default Navbar;