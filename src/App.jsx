import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import Companies from "./pages/Companies";
import Institutes from "./pages/Institutes";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/institutes" element={<Institutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;