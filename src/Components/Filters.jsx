function Filters() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <select>
        <option>City</option>
        <option>Mumbai</option>
        <option>Bangalore</option>
      </select>

      <select>
        <option>Type</option>
        <option>Company</option>
        <option>Institute</option>
      </select>
    </div>
  );
}

export default Filters;