import { burgerKingLogo } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [name, setName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={burgerKingLogo} alt="Not available" />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              name === "Login" ? setName("Logout") : setName("Login");
            }}
          >
            {name}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
