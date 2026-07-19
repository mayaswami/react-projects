import { useState } from "react";
import "./SignUpForm.css";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let field = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ formData });
  };

  return (
    <div className="page-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="header">
            <h1>Create account</h1>
            <p>Sign up to get started</p>
          </div>
          <div className="form-field">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="btn-group">
            <button className="btn btn-primary" type="submit">
              Create account
            </button>
            <p>or</p>
            <button className="btn btn-secondary" type="button">
              Continue with Google
            </button>
          </div>
          <footer className="footer">
            <p>
              Already have an account? <a href="#">Log in</a>{" "}
            </p>
          </footer>
        </div>
      </form>
    </div>
  );
}
export default SignUpForm;
