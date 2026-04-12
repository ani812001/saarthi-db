import { useState } from "react";
import { aiSearch } from "../services/api";
import Card from "../components/Card";

function AISearch() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      setError("");

      const res = await aiSearch(prompt);

      setResults(res.data || []);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>🤖 AI Search</h2>

      {/* Input */}
      <textarea
        className="search-bar"
        style={{ width: "100%", minHeight: "100px" }}
        placeholder="e.g. Top IT companies in Bangalore hiring freshers"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={handleSearch} style={{ marginTop: "10px" }}>
        {loading ? "Searching..." : "Search with AI"}
      </button>

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Results */}
      <div className="grid" style={{ marginTop: "30px" }}>
        {results.length > 0 ? (
          results.map((item, i) => <Card key={i} item={item} />)
        ) : (
          !loading && <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default AISearch;