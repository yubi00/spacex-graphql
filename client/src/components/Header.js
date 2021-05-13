import React from "react";
import logo from "../logo.jpg";

const Header = () => {
  return (
    <header>
      <img
        src={logo}
        style={{ width: 300, display: "block", margin: "auto" }}
        alt='spacex'
      />
    </header>
  );
};

export default Header;
