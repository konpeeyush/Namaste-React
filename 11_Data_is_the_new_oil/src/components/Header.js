import { burgerKingLogo } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnline } from "../utils";

const Header = () => {
  const [name, setName] = useState("Login");
  return (
    <div className="flex justify-between bg-pink-200 shadow-md">
      <div className="logo-container">
        <img className="w-28 my-2" src={burgerKingLogo} alt="Not available" />
      </div>

      <div className="flex items-center ">
        <ul className="flex p-4 m-4 text-lg font-semibold">

          <li className="px-4">
            Online Status: {useOnline() ? "✅" : "🔴"}
          </li>

          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>

          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

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
