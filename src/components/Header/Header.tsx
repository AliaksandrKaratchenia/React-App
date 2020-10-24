import React from "react";
import BreadCrumb from "../BradCrumb/BreadCrumb";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" color="inherit" className="header">
      <Toolbar>
        <BreadCrumb />
      </Toolbar>
    </AppBar>
  );
};
export default Header;