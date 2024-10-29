import React from "react";
import logo from "./assets/profile-pic.svg";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <h1>Jessica Randall</h1>
        <h3>London, United Kingdom</h3>
      </div>
      <div>
        <p>"Front-end developer and avid reader."</p>
      </div>
    </div>
  );
};

export default Header;
