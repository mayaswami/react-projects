function ProductCard2({id, productName, price, rating, stock}) {
 
  return (
    <>
      <h2>{productName}</h2>
      <p>Price: {price}</p>
      <p>Rating: {rating}</p>
      <p>{stock === "In Stock" ? "✅ Available" : "❌ Not Available"}</p>
    </>
  );
}
export default ProductCard2;
