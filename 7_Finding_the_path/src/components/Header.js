import { burgerKingLogo } from "../utils/constants";
import React, { useState } from "react";

const Header = () => {
  const [name, setName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={burgerKingLogo} alt="Not available" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
