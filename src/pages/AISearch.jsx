import { useState } from "react";
import { aiSearch } from "../services/api";
import Card from "../components/Card";

function AISearch() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await aiSearch(prompt);
      setResults(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>AI Search</h2>

      <textarea
        placeholder="e.g. Top IT companies in Bangalore hiring freshers"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={handleSearch}>Search with AI</button>

      <div className="grid">
        {results.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default AISearch;