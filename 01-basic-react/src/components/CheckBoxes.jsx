import { useState } from "react";

function CheckBox() {
  const [lang, setLang] = useState([]);
  function handleChange(e) {
    console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
        setLang([...lang,e.target.value]) 
    }else {
        setLang([...lang.filter((item) => item != e.target.value)])
    }
  }

  return (
    <div>
      <h1>Please select your programming languages</h1>
      <input type="checkbox" id="php" onChange={handleChange} value="php" />
      <label htmlFor="php">PHP</label>
      <br />
      <br />
      <input type="checkbox" id="js" onChange={handleChange} value="js" />
      <label htmlFor="js">JS</label>
      <br />
      <br />
      <input type="checkbox" id="java" onChange={handleChange} value="java" />
      <label htmlFor="java">Java</label>
      <br />
      <br />
      <input
        type="checkbox"
        id="python"
        onChange={handleChange}
        value="python"
      />
      <label htmlFor="python">Python</label>
      <h2>{lang.toString()}</h2>
    </div>
  );
}

export default CheckBox;
