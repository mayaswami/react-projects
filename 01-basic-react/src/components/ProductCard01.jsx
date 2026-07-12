function ProductCard1({ productName, price, rating, stock }) {
    return (
        <div>
        <h1>Product: {productName}</h1>
        <p>Price: ₹{price}</p>
        <p>Rating: {rating}</p>
        <p>Stock: {stock}</p>
    </div>
    )
    
};

export default ProductCard1;