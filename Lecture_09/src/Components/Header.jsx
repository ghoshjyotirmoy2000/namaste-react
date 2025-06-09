import { useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link } from "react-router-dom";

const Header = () => {

  const [btnName , setBtnName] = useState("Log In")

  console.log("header render")

  const handleClick = () => {
    (btnName === "Log In") ? setBtnName("Log Out") : setBtnName("Log In")
  }

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src= {LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About us</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li><Link to={"/cart"}>Cart</Link></li>
            <button className="btn-login" onClick={handleClick}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;