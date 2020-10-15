import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const BreadCrumb: React.FC = () => {
  const [items, setItems] = useState(["Home"]);
  const location = useLocation();
  useEffect(() => {
    const paths =
      location.pathname === "/"
        ? ["Home"]
        : location.pathname
            .slice(1)
            .split("/")
            .map((el) => el.charAt(0).toUpperCase() + el.slice(1));
    setItems(paths);
  }, [location.pathname]);
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {items.map((text, index) => (
        <Typography key={index}>{text}</Typography>
      ))}
    </Breadcrumbs>
  );
};
export default BreadCrumb;
