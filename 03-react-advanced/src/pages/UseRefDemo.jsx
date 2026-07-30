import { useState, useRef, useEffect } from "react";
import "../css/UseRefDemo.css";
import Stopwatch from "../components/Stopwatch";

function UseRefDemo() {
  // useState vs useRef Demo

  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // Focus Input Demo

  const inputRef = useRef(null);

  // Functions

  function increaseState() {
    setCount((prev) => prev + 1);
  }

  function increaseRef() {
    countRef.current++;
    console.log(countRef.current);
  }

  function focusInput() {
    inputRef.current.focus();
  }

  // Auto Focus

  const autoFocusRef = useRef(null);

  useEffect(() => {
    autoFocusRef.current.focus();
  }, []);

  // Clear Demo

  const clearInputRef = useRef(null);

  function clearInput() {
    clearInputRef.current.value = "";
  }

  // Render Count
  const renderCount = useRef(0);
  renderCount.current++;

  //
  const [text, setText] = useState("");
  const previousText = useRef("");
  function handleChange(e) {
    previousText.current = text;
    setText(e.target.value);
  }

  return (
    <div className="use-ref-demo">
      <section className="demo-section">
        {/*  Demo 1  */}
        <h1>useRef Demo</h1>
        <hr />
        <h2>State Count: {count}</h2>
        <h2>Ref Count: {countRef.current}</h2>
        <button onClick={increaseState}>Increase State</button>
        <button onClick={increaseRef}>Increase Ref</button>
      </section>
      <hr />
      <section className="demo-section">
        {/* Demo 2 */}
        <h2>Focus Input</h2>
        <input type="text" ref={inputRef} />
        <button onClick={focusInput}>Focus Input</button>
      </section>
      <hr />
      <section className="demo-section">
        {/* Demo 3 */}
        <h2>Auto Focus Example</h2>
        <input type="text" ref={autoFocusRef} placeholder="Auto Focus" />
      </section>
      <hr />
      <section className="demo-section">
        {/* Demo 4 */}
        <h2>Clear Input Example</h2>
        <input type="text" ref={clearInputRef} placeholder="Enter your name" />
        <button onClick={clearInput}>Clear Input</button>
      </section>
      <hr />
      <section className="demo-section">
        {/* Demo 5 */}
        <h2>Render Count: {renderCount.current}</h2>
      </section>
      <hr />
      <section className="demo-section">
        {/* Demo 6 */}
        <input type="text" value={text} onChange={handleChange} />{" "}
        <h3>Current : {text}</h3>
        <h3>Previous : {previousText.current}</h3>
      </section>
      <hr />
      <section className="demo-section">
        {/* Demo 7 */}
        <Stopwatch />
      </section>
    </div>
  );
}
export default UseRefDemo;
