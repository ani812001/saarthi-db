import { useState } from "react";
import SearchBar from "../Components/SearchBar";
import Filters from "../Components/Filters";
import Card from "../Components/Card";

const data = [
  { name: "TCS", location: "Mumbai", domain: "IT", type: "Company" },
  { name: "Infosys", location: "Bangalore", domain: "IT", type: "Company" },
  { name: "Wipro", location: "Bangalore", domain: "IT", type: "Company" },
  { name: "IIT Bombay", location: "Mumbai", domain: "Education", type: "Institute" },
  { name: "Nirma University", location: "Gujarat", domain: "Education", type: "Institute" }
];

function Search() {
  const [query, setQuery] = useState("");

  // 🔥 AI logic
  const parseQuery = (q) => {
    let city = "";
    let domain = "";

    if (q.toLowerCase().includes("bangalore")) city = "Bangalore";
    if (q.toLowerCase().includes("mumbai")) city = "Mumbai";

    if (q.toLowerCase().includes("it")) domain = "IT";
    if (q.toLowerCase().includes("college")) domain = "Education";

    return { city, domain };
  };

  const { city, domain } = parseQuery(query);

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      (city === "" || item.location === city) &&
      (domain === "" || item.domain === domain)
    );
  });

  return (
    <div>
      <div className="hero">
        <h1>AI Smart Search 🔍</h1>
        <SearchBar setQuery={setQuery} />
      </div>

      <div className="container">
        <Filters />

        <div className="grid">
          {filteredData.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;