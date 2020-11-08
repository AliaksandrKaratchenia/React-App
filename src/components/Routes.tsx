import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Data from "./Pages/Data/Data";
import Settings from "./Pages/Settings/Settings";

const Routes: React.FC = () => {
  const routesElement = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "data",
      element: <Data />
    },
    {
      path: "settings",
      element: <Settings />
    },
  ]);
  return routesElement;
};

export default Routes;