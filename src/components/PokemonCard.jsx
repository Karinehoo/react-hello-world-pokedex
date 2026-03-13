const Card = ({ children}) => {
  return (
    <div className="pokemon-card"
      style={{
        backgroundColor: "#f0f0f0",
        borderRadius: 16,
        padding: 16,
        width: "150px",
        height: "250px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;