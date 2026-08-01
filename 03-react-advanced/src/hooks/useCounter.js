import { useState } from "react";

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    function increment() {
        setCount((prev) => prev + 1);
    }

    function decrement() {
        setCount((prev) => prev - 1);
    }

    function reset() {
        setCount(initialValue);
    }

    return {
        count,
        increment,
        decrement,
        reset,
    };
}

export default useCounter;