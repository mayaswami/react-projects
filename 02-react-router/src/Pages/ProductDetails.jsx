import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();

  const products = {
    101: {
      name: "iPhone 15",
      price: "₹79,900",
      category: "Smartphone",
      availability: "In stock",
      description:
        "The latest iPhone 15 combines a powerful A16 Bionic chip, improved cameras, and a brighter OLED display for premium mobile performance.",
      features: [
        "48MP main camera with cinematic mode",
        "Dynamic Island and Always-On display",
        "Up to 20 hours of video playback",
      ],
    },
    102: {
      name: "MacBook Air M3",
      price: "₹1,14,900",
      category: "Laptop",
      availability: "Limited stock",
      description:
        "The MacBook Air M3 delivers exceptional speed, fanless design, and all-day battery life in a thin, lightweight package.",
      features: [
        "Apple M3 chip with 8-core CPU",
        "15.3-inch Liquid Retina display",
        "Up to 18 hours battery life",
      ],
    },
    103: {
      name: "AirPods Pro",
      price: "₹24,900",
      category: "Wireless Earbuds",
      availability: "In stock",
      description:
        "AirPods Pro offer active noise cancellation, immersive spatial audio, and a comfortable fit for everyday listening.",
      features: [
        "Adaptive Transparency mode",
        "MagSafe charging case",
        "Sweat and water resistant (IPX4)",
      ],
    },
  };

  const product = products[productId];
  if (!product) {
    return (
      <div className="page product-details product-not-found">
        <h1 className="notfound-title">404</h1>
        <p className="notfound-message">
          Oops! The product with ID <strong>{productId}</strong> was not found.
        </p>
        <Link className="view-btn" to="/products">
          Back to Products
        </Link>
      </div>
    );
  }
  return (
    <div className="page product-details">
      <h1 className="product-title">Product Details</h1>
      <h2 className="product-name">{product.name}</h2>
      <div className="product-meta">
        <span className="product-category">{product.category}</span>
        <span className="product-availability">{product.availability}</span>
      </div>
      <p className="product-price">{product.price}</p>
      <p className="product-description">{product.description}</p>
      <ul className="product-features">
        {product.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <p className="product-id">Product ID: {productId}</p>
      <Link className="back-link view-btn" to="/products">
        ← Back to Products
      </Link>
    </div>
  );
}

export default ProductDetails;
