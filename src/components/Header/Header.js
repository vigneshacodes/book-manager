import React from "react";
import Nav from "./Nav.js";
import "./Header.css";

const Header = ({ title, hub }) => {
  return (
    <header className="Header">
      <h1>
        {title}
        <span>{hub}</span>{" "}
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
