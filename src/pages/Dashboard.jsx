import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";

const data = [
  { city: "Mumbai", companies: 10 },
  { city: "Bangalore", companies: 15 },
  { city: "Gujarat", companies: 8 }
];

const pieData = [
  { name: "IT", value: 60 },
  { name: "Education", value: 40 }
];

const COLORS = ["#38bdf8", "#00c6ff"];

function Dashboard() {
  return (
    <div className="container">
      <h2>📊 Dashboard</h2>

      <div className="stats">
        <div className="box">Companies: 33</div>
        <div className="box">Institutes: 20</div>
      </div>

      <div className="chart">
        <h3>Companies by City</h3>

        <BarChart width={400} height={300} data={data}>
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="companies" fill="#38bdf8" />
        </BarChart>
      </div>

      <div className="chart">
        <h3>Industry Distribution</h3>

        <PieChart width={400} height={300}>
          <Pie data={pieData} dataKey="value" outerRadius={100}>
            {pieData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}

export default Dashboard;