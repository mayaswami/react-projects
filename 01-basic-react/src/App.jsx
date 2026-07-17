//*import ProductCard1 from './components/ProductCard01.jsx' */
// import ProductCard2 from "./components/ProductsCard02.jsx";
// import Counter from './components/Counter.jsx';
// import Toggle from "./components/Toggle.jsx";
// import ControlledComponent from "./components/ControlledCom01.jsx";
// import CheckBox from "./components/CheckBoxes.jsx";
// import CounterOne from "./components/UseEffect";
// import FetchApi from "./components/FetchApi";
// import Radio from "./components/RadioBtn";
// import CollegeList from "./components/CollegeList";
import ProductCard from "./components/ProductCard03";

// const products = [
//   {
//     id: 1,
//     productName: "Keyboard",
//     price: 1000,
//     rating: 4,
//     stock: "In Stock",
//   },
//   {
//     id: 2,
//     productName: "Mouse",
//     price: 500,
//     rating: 5,
//     stock: "Out of Stock",
//   },
//   {
//     id: 3,
//     productName: "Monitor",
//     price: 12000,
//     rating: 4,
//     stock: "In Stock",
//   },
//   {
//     id: 4,
//     productName: "Laptop",
//     price: 65000,
//     rating: 5,
//     stock: "In Stock",
//   },
// ];

function App() {
  const sampleProduct1 = {
    image: "https://one8.com/cdn/shop/files/V10032402_03_3e786937-e032-4daf-a435-4573e19db93b.jpg?v=1781859672&width=2002",
    name: "One Eight Sneakers",
    price: "9230/-",
    description: "Comfortable and stylish sneakers perfect for everyday wear and casual sports.",
  };

  const sampleProduct2 = {
    image:
      "https://5.imimg.com/data5/ECOM/Default/2023/12/366885888/UC/NA/GQ/203539192/gr-f75da371-67fe-4dca-a670-c0bbb7eb0dbd-30284209-origin80prcnt-500x500.jpg",
    name: "One Eight Hoodie",
    price: "4999/-",
    description:
      "Soft and cozy hoodie ideal for layering and relaxed weekend outfits.",
  };

  const sampleProduct3 = {
    image:
      "https://one8.com/cdn/shop/files/1_d75924d1-ef51-4b62-b8e6-d4ad2c68c1d0.jpg?v=1783341393&width=1500",
    name: "One Eight Cap",
    price: "1299/-",
    description:
      "Lightweight cap with breathable fabric and a modern sporty look.",
  };

  const handleAddToCart = (productName) => {
    alert(`${productName} added to your cart!`);
  };

  return (
    <>
      {/* <Toggle />  */}
      {/* <Counter /> */}
      {/* <ControlledComponent /> */}
      {/* <Form /> */}
      {/* <CheckBox /> */}
      {/* <CounterOne /> */}
      {/* <FetchApi /> */}
      {/* <Radio /> */}
      {/* <CollegeList /> */}

      <div
        style={{ backgroundColor: "black", display: "flex", justifyContent: "center", padding: "40px" }}
      >
        <ProductCard
          image={sampleProduct1.image}
          name={sampleProduct1.name}
          price={sampleProduct1.price}
          description={sampleProduct1.description}
          onAddToCart={() => handleAddToCart(sampleProduct1.name)}
        />
        <ProductCard
          image={sampleProduct2.image}
          name={sampleProduct2.name}
          price={sampleProduct2.price}
          description={sampleProduct2.description}
          onAddToCart={() => handleAddToCart(sampleProduct2.name)}
        />
        <ProductCard
          image={sampleProduct3.image}
          name={sampleProduct3.name}
          price={sampleProduct3.price}
          description={sampleProduct3.description}
          onAddToCart={() => handleAddToCart(sampleProduct3.name)}
        />
      </div>

      {/* <h1>Products</h1>
      {products.map((product) => (
        <ProductCard2 
        key={product.id} 
        {...product}/>
      ))} */}

      {/* <ProductCard1 
      productName= "Keyboard"
      price={1000}
      rating={4}
      stock="In Stock ✔"
    />

      <ProductCard1
        productName="Mouse"
        price={500}
        rating={5}
        stock="Out of Stock ❌"
      />

      <ProductCard1
        productName="Monitor"
        price={12000}
        rating={4}
        stock="In Stock ✔" 
      /> */}
    </>
  );
}

export default App;
