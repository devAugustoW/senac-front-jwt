import './Card.css'; 

const Card = ({ title, userName, content, createdAt }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p><strong>Autor:</strong> {userName}</p>
      <p>{content}</p>
      <p><em>{new Date(createdAt).toLocaleDateString()}</em></p>
    </div>
  );
};

export default Card;