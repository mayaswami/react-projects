import { useState } from "react";
import "./ProductCard03.css";

const colors = ["black", "darkred", "navy"];

function ProductCard({
  image,
  name,
  price,
  description,
  category = "trending",
  onAddToCart,
}) {

  const [selectedColor, setSelectedColor] = useState("black"); 

  return (
    <div className="product-card">
      <div className="product-image-container">
        <span className="product-badge">{category}</span>
        <img src={image} alt={name} className="product-image" />
      </div>

      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">{name}</h3>
          <span className="product-price">₹{price}/-</span>
        </div>

        <p className="product-description">{description}</p>

        <div className="product-options">
          <span className="options-label">Select Color:</span>
          <div className="color-swatches">
            {colors.map((color) => (
              <button
                key={color}
                className={`swatch ${selectedColor === color ? "active" : ""}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select ${color}`}
              />
            ))}
          </div>
        </div>

        <button type="button" className="add-to-cart-btn" onClick={onAddToCart}>
          Add to Cart
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cart-icon"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
