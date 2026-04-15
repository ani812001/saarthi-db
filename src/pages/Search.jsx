import { useState } from "react";
import { smartSearch } from "../services/api";
import Card from "../components/Card";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);

      const res = await smartSearch({
        name: query,
        location: location,
        domain: domain,
      });

      setResults(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <h1>Find Companies</h1>

        {/* SEARCH INPUT */}
        <input
          className="search-bar"
          placeholder="Search companies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* 🔥 FILTERS */}
        <div className="filters">
          <select onChange={(e) => setLocation(e.target.value)}>
            <option value="">All Cities</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="pune">Pune</option>
          </select>

          <select onChange={(e) => setDomain(e.target.value)}>
            <option value="">All Domains</option>
            <option value="it">IT</option>
            <option value="finance">Finance</option>
            <option value="education">Education</option>
          </select>
        </div>

        {/* BUTTON */}
        <button onClick={handleSearch}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {/* RESULTS */}
      <div className="container">
        {loading ? (
          <p>Loading results...</p>
        ) : results.length === 0 ? (
          <p>No results found</p>
        ) : (
          <div className="grid">
            {results.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Search;