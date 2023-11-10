import logo from "../assets/vector.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>
          <Link to="/" className="Navbar__item">
            Home
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="Navbar__item">
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/courses" className="Navbar__item">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/about" className="Navbar__item">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/vendor" className="Navbar__item">
            Vendor
          </Link>
        </li>
        <li>
          <Link to="/employer" className="Navbar__item">
            Employer
          </Link>
        </li>
      </ul>
      <div className="nav_buttons">
        <button className="btn btn-primary">Sign In</button>
        <button className="btn btn-secondary">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
