const Card = ({ children, borderColor}) => {
  return (
    <div
      style={{
        border: "1px solid",
        borderColor: borderColor,
        borderRadius: 8,
        padding: 16,
        backgroundColor: borderColor + "33",
        width: "150px",
        height: "250px",
      }}
    >
      {children}
    </div>
  );
};

export default Card;