import { useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Log In");

  const handleClick = () => {
    setBtnName((prev) => (prev === "Log In" ? "Log Out" : "Log In"));
  };

  return (
    <header className="shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="h-16 w-16 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8 text-gray-700 text-base font-medium">
            <li className="hover:text-lime-700 transition-colors duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-lime-700 transition-colors duration-200">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-lime-700 transition-colors duration-200">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-lime-700 transition-colors duration-200">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="hover:text-lime-700 transition-colors duration-200">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <button
                onClick={handleClick}
                className="px-4 py-2 bg-lime-700 text-white rounded-full shadow hover:bg-lime-800 transition duration-300">
                {btnName}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
