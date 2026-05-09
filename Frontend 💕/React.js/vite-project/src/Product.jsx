import "./Product.css";

export default function Product({ title, price, description }) {
  let styles = {backgroundColor :  price>55000 ? "yellow" : ""};
  return (
    <div className="Product" style={styles}> 
      <h2>Title: {title}</h2>
      <h4>Price: {price}</h4>
      {price > 55000 ? <p>Discount of 5%</p> : null}
    </div>
  );
}