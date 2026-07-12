import { useState } from "react";

function ControlledComponent() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  let handlerNameChange = (e) => {
    setName(e.target.value);
  };

  let handlerPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  let handlerEmailChange = (e) => {
    setEmail(e.target.value);
  };

  let handlerClear = () => {
    setName("");
    setPassword("");
    setEmail("");
  };

  let handlerSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      password,
      email,
    });
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={handlerNameChange}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handlerPasswordChange}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={handlerEmailChange}
      />
      <br />
      <br />
      <hr />
      <button type="button" onClick={handlerClear}>Clear</button>
      <br />
      <br />
      <button type="submit">Submit</button>
      <hr />

      <h2>{name}</h2>
      <h2>{password}</h2>
      <h2>{email}</h2>
    </form>
  );
}

export default ControlledComponent;
