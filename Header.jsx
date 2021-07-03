import React from "react";
import logo from "./Images/logo.jpg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width="70" className="logo" />
        <h1 className="goyal"> Goyal Notes </h1>
        <div className="main_note"></div>
      </div>
    </>
  );
};
export default Header;
