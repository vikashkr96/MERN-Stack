import Product from "./Product.jsx";  

function ProductTab() {
  return (
    <>
      <Product />
      <Product />
      <Product />
    </>
  );
}
export default ProductTab;

// this is how we pass array / objects and render it through React props.................
// import Product from "./Product.jsx";

// function ProductTab() {
//   let features = ["New Launched", "AI Driven System", "Better Performance"];
//   return (
//     <>
//       <Product
//         title="phone"
//         price={58800}
//         description="aaaaa aaaaaaaaa aaaaaaa aaaaaa aaaa aaaa"
//         features = {features}
//       />

//       <Product
//         title="laptop"
//         price={52000}
//         description="bbbbbb bbbbbbb bbbbbb bbbbb bbbbbb bbbbb"
//       />

//       <Product
//         title="tab"
//         price={50002}
//         description="nnnnn nnnnnnnnnn nnnnnn nnn nnnn nnnnnnn"
//       />
//     </>
//   );
// }

// export default ProductTab;
