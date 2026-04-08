function Card({ item }) {
  return (
    <div className="card">
      <div className="badge">COMPANY</div>

      <h3>{item.name}</h3>
      <p className="location">📍 {item.location}</p>

      <p>{item.domain}</p>
    </div>
  );
}

export default Card;