import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";

const COLORS = ["#38bdf8", "#22c55e", "#f59e0b"];

function Dashboard() {
  const [cityData, setCityData] = useState([]);
  const [domainData, setDomainData] = useState([]);

  // 🔥 Fetch data from backend
  useEffect(() => {
    // City data
    fetch("http://localhost:5000/api/stats")
      .then((res) => res.json())
      .then((data) => setCityData(data))
      .catch((err) => console.log(err));

    // Domain data
    fetch("http://localhost:5000/api/domain-stats")
      .then((res) => res.json())
      .then((data) => setDomainData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2>📊 Dashboard</h2>

      {/* Stats */}
      <div className="stats">
        <div className="box">Companies: {cityData.reduce((a, b) => a + b.companies, 0)}</div>
        <div className="box">Domains: {domainData.length}</div>
        <div className="box">Searches: 1.2K</div>
        <div className="box">Users: 87</div>
      </div>

      {/* Charts */}
      <div style={{ display: "flex", gap: "40px", marginTop: "40px" }}>
        
        {/* Bar Chart */}
        <div style={{ width: "50%", height: 300 }}>
          <h3>Companies by City</h3>
          <ResponsiveContainer>
            <BarChart data={cityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="companies" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div style={{ width: "50%", height: 300 }}>
          <h3>Domain Distribution</h3>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={domainData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
              >
                {domainData.map((entry, index) => (
                  <Cell key={index} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;