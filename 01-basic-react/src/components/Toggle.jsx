import { useState } from "react";

function Toggle() {
    const [display, setDisplay] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >Change name</button>

      {
        display ? <h1>Maya</h1> : <h1>Ritu</h1>
      }
    </>
  );
}
export default Toggle;
