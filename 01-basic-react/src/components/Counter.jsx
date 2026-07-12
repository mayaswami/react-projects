import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {   
    if (count < 10) {
      setCount(count + 1);
    }
  }    
  
  function decrease() {
   if (count > 0) {
    setCount(count - 1);
    }
  }
  function reset() {
    setCount(0);
  }

  const defaultStyles = {
    backgroundColor: "#d29fc6",
    color: "black",
    border: "2px solid black",
    borderRadius: "8px",
    padding: "5px 10px",
    margin: "15px 20px",
    fontSize: "19px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return (
    <>
      <h1>counter : {count}</h1>
      <button style={defaultStyles} disabled={count >= 10} onClick={increase}>
        increase count
      </button>
      <br />
      <button style={defaultStyles} disabled={count === 0} onClick={decrease}>
        decrease count
      </button>
      <br />
      <button style={defaultStyles} onClick={reset}>
        reset count
      </button>
      {/* <h2>
        {
        (() => {
        if (count === 0) return <h3>Start Counting!</h3>;
        if (count === 10) return <h3>Welldone! You nailed it 🚀</h3>;
        if (count <= 5) return <h3>Keep Going!</h3>;
        if (count >= 6) return <h3>Awesome! Almost there 🚀</h3>;        
        return null;
      })()
      }
      </h2> */}
      
      {/* {count === 10 && <h2>count has reached its maximum limit 🎉</h2>}
      {count === 0 && <h2>count has reached its minimum limit</h2>} */}

      {/* {
        count === 0 ? <h2>Start Counting!</h2>
      : count === 10 ? <h2>Maximum Limit Reached 🚫</h2>  
      : count <= 5 ? <h2>Keep Going Bitch!</h2>
      : count >= 6 ? <h2>Awesome! Almost there 🚀</h2>      
      : null
      } */}
      
    </>
  );
}
export default Counter;