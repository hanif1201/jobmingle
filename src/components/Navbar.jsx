import { Link } from "react-router-dom";
import logo from "../assets/vector.png";

const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="nav_buttons"></div>
    </header>
  );
};

export default Navbar;
