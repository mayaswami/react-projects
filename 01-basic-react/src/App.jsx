{
  /*import ProductCard1 from './components/ProductCard01.jsx' */
}
// import ProductCard2 from "./components/ProductsCard02.jsx";
// import Counter from './components/Counter.jsx';
// import Toggle from "./components/Toggle.jsx";
// import ControlledComponent from "./components/ControlledCom01.jsx";
import Form from "./components/ControlledCom02.jsx";

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
  return (
    <>
      {/* <Toggle />  */}
      {/* <Counter /> */}
      {/* <ControlledComponent /> */}
      <Form />
      
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
