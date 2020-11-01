import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./components/Routes";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { Toolbar } from "@material-ui/core";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="root">
      <CssBaseline />
      <Header />
      <SideBar />
      <main className="content">
        <Toolbar />
        <Routes />
      </main>
    </div>
  );
};
export default App;