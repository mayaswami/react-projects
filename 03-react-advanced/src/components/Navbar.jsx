import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/context-api">Context API</NavLink>
        <NavLink to="/custom-hooks">Custom Hooks</NavLink>
        <NavLink to="/react-memo">React Memo</NavLink>
        <NavLink to="/use-callback">Use Callback</NavLink>
        <NavLink to="/use-memo">Use Memo</NavLink>
        <NavLink to="/use-ref">Use Ref</NavLink>
      </div>
    </nav>
  );
}
export default Navbar;