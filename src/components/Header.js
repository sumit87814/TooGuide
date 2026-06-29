import { LOGO_URL } from "../utils/constant.js";
import { useState } from "react";

const Header = () => {

  const [btnName, setbtnName] = useState("Login");
  console.log("Header rendered");
    return(
      <div className="header">
        <div className="logo-container">
      <img className="logo" src={LOGO_URL} alt="" />
        </div>
        <div className="nav-items"> 
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <button className="login-btn" onClick={() => {
              btnName ==="Login"?
                setbtnName("Logout"):
                setbtnName("Login");
            }} >{btnName}</button>
          </ul>
          </div>
        </div>
    );
};

export default Header;