import "./Product.css"
function Product() {
  return (
    <div className="Product">
      <h3>product</h3>
      <p>description...</p>
    </div>
  );
}
export default Product;

// this is how we add conditionals 
// import "./Product.css";

// export default function Product({ title, price, description }) {
//   return (
//     <div className="Product">
//       <h2>Title: {title}</h2>
//       <h4>Price: {price}</h4>
//       {price > 55000 ? <p>Discount of 5%</p> : null}
//       <p>More info: {description}</p>
//     </div>
//   );
// }
