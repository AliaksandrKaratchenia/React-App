import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./Home/Home";
import Data from "./Data/Data";
import Settings from "./Settings/Settings";

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