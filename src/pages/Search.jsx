import Layout from "../Components/layout/Layout";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = () => {
    setResult(["Company A", "Institute B"]);
  };

  return (
    <Layout>
      <h1>AI Search</h1>

      <input
        type="text"
        placeholder="Enter company or institute"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <ul>
        {result.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Search;