import { useState } from "react";
import Card from "../components/Card";

const data = [
  { name: "TCS", location: "Mumbai", domain: "IT" },
  { name: "Infosys", location: "Bangalore", domain: "IT" },
  { name: "Wipro", location: "Bangalore", domain: "IT" }
];

function Search() {
  const [query, setQuery] = useState("");

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="hero">
        <h1>
          Find Companies & <span>Institutes</span>
        </h1>

        <input
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="filters">
          <div className="pill active">All</div>
          <div className="pill">Companies</div>
          <div className="pill">Institutes</div>
        </div>
      </div>

      <div className="container">
        <div className="grid">
          {filtered.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;