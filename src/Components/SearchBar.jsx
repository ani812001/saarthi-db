import { useState } from "react";

const suggestionsData = [
  "TCS Mumbai",
  "Infosys Bangalore",
  "Top IT companies",
  "Engineering colleges Gujarat",
  "Wipro jobs",
  "IIT Bombay"
];

function SearchBar({ setQuery }) {
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filtered = suggestionsData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Search companies or institutes..."
        className="search-bar"
        onChange={handleChange}
      />

      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => setQuery(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;