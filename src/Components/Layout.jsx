import Navbar from "./layout/Navbar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="main-content">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;