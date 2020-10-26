import React from "react";
import BreadCrumb from "../BradCrumb/BreadCrumb";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./Header.scss";
import { IconButton, InputAdornment, InputBase, TextField } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { Input } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" color="inherit" className="header">
      <Toolbar className="toolbar">
        <BreadCrumb />
        <Input
          className="input-field"
          placeholder="Quick Search"
          disableUnderline
          startAdornment={
              <InputAdornment position="start">
                <IconButton className="search-icon">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
          }
        />
      </Toolbar>
    </AppBar>
  );
};
export default Header;