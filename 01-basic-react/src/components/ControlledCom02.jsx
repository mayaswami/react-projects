import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });

    function handleChange(e) {

        const field = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [field]:value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log({formData});
    }
    function clearForm() {
      setFormData({
        name: "",
        password: "",
        email: ""
      })
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Fucking Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter ur Fucking Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Fucking Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <hr />
        <button type="button" onClick={clearForm}>
          Clear Form
        </button>
        <br />
        <br />
        <button type="submit">Submit Form</button>
        <br />
        <br />
        <h2>{formData.name}</h2>
        <h2>{formData.password}</h2>
        <h2>{formData.email}</h2>
      </form>
    );    
}

export default Form;