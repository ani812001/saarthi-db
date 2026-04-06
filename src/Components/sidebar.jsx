import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>SaarthiDB</h2>

      <Link to="/">Dashboard</Link>
      <Link to="/companies">Companies</Link>
      <Link to="/institutes">Institutes</Link>
      <Link to="/search">AI Search</Link>
    </div>
  );
};

export default Sidebar;