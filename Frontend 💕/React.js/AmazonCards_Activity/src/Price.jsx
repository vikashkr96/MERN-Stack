import "./Price.css";

export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
  };

  return (
    <div className="vk">
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp;&nbsp;

      <span className="new-price">{newPrice}</span>
    </div>
  );
}