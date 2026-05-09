import Product from "./Product.jsx";

function ProductTab() {
  return (
    <>
      <Product
        title="phone"
        price={58800}
        description="aaaaa aaaaaaaaa aaaaaaa aaaaaa aaaa aaaa"
      />

      <Product
        title="laptop"
        price={52000}
        description="bbbbbb bbbbbbb bbbbbb bbbbb bbbbbb bbbbb"
      />

      <Product
        title="tab"
        price={50002}
        description="nnnnn nnnnnnnnnn nnnnnn nnn nnnn nnnnnnn"
      />
    </>
  );
}

export default ProductTab;