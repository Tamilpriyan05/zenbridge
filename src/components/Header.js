import React, { useState } from "react";
import logo from "../images/logo.png";
import "../css/header.css";

const Header = ({ sendstatus }) => {
  const [status, setStatus] = useState(false);

  const handleclick = () => {
    setStatus(!status);
    sendstatus(status);
  };
  return (
    <header>
      <div className="header max-width">
        <div className="header_box1">
          <img src={logo} alt="Zenbridgelogo" />
        </div>
        <ul>
          <li>
            about us <i class="fa-solid fa-angle-down"></i>
          </li>
          <li>
            products <i class="fa-solid fa-angle-down"></i>
          </li>
          <li>
            solutions <i class="fa-solid fa-angle-down"></i>
          </li>
          <li>pricing</li>
          <li>developers</li>
          <li>
            resources <i class="fa-solid fa-angle-down"></i>
          </li>
        </ul>

        <div className="header_box3">
          <button className="btn1">
            contact sales <i class="fa-solid fa-chevron-right"></i>
          </button>
          <button className="btn2">login</button>
        </div>
        <p onClick={handleclick}>
          {status ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            <i class="fa-solid fa-bars"></i>
          )}
        </p>
      </div>
    </header>
  );
};

export default Header;
