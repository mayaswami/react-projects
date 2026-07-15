import { useState } from "react";

 function Radio() {
    const [gender, setGender] = useState("female");
    const [city, setCity] = useState("Jodhpur");

    const handleGender = (e) => setGender(e.target.value);
    const handleCity = (e) => setCity(e.target.value); 

    return (
      <div>
        <h1>Handle Radio and Dropdown</h1>
        <h2>Select Gender</h2>
        <input
          type="radio"
          onChange={handleGender}
          name="gender"
          id="male"
          value={"male"}
          checked={gender === "male"}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          onChange={handleGender}
          name="gender"
          id="female"
          value={"female"}
          checked={gender === "female"}
        />
        <label htmlFor="female">Female</label>
        <h3>Selected Gender : {gender}</h3>
        <br /> <br />
        <h2>Select City</h2>
        <select onChange={handleCity} defaultValue={"Jodhpur"}>
          <option value="Jaipur">Jaipur</option>
          <option value="Udaipur">Udaipur</option>
          <option value="Kota">Kota</option>
          <option value="Sikar">Sikar</option>
          <option value="Jhunjhunu">Jhunjhunu</option>
          <option value="Jodhpur">Jodhpur</option>
        </select>
        <h3>Selected City : {city}</h3>
      </div>
    );
 }
 export default Radio;