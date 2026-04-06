import "../App.css";

function Card({ item }) {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>{item.location}</p>
      <p>{item.domain}</p>
      <span>{item.type}</span>
    </div>
  );
}

export default Card;