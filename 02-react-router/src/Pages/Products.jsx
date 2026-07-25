import { Link } from "react-router-dom";
import "../css/Products.css";

function Products() {
  const products = [
    {
      id: 101,
      name: "iPhone 15",
      price: "₹79,900",
    },
    {
      id: 102,
      name: "MacBook Air M3",
      price: "₹1,14,900",
    },
    {
      id: 103,
      name: "AirPods Pro",
      price: "₹24,900",
    },
  ];
  return (
    <div className="page">
      <h1>Products</h1>

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>

            <p className="product-price">{product.price}</p>

            <Link className="view-btn" to={`/products/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Products;
