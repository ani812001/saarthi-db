import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

// Components
import Navbar from "./Components/Navbar";

// Pages
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Companies from "./pages/Companies";
import Institutes from "./pages/Institutes";
import Reports from "./pages/Report";
import AISearch from "./pages/AISearch"; // ✅ FIXED
import Signup from "./pages/Signup";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      {isAuthenticated && <Navbar />}

      <Routes>
        <Route
          path="/login"
          element={<Login setAuth={setIsAuthenticated} />}
        />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={isAuthenticated ? <Search /> : <Navigate to="/login" />}
        />

        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route
          path="/companies"
          element={isAuthenticated ? <Companies /> : <Navigate to="/login" />}
        />

        <Route
          path="/institutes"
          element={isAuthenticated ? <Institutes /> : <Navigate to="/login" />}
        />

        <Route
          path="/report"
          element={isAuthenticated ? <Reports /> : <Navigate to="/login" />}
        />

        <Route
          path="/ai-search"
          element={isAuthenticated ? <AISearch /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;