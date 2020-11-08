import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import {ISidebarItem, itemsList} from "../SideBar/SideBar";
import "./BreadCrumb.scss";

const BreadCrumb: React.FC = () => {
  const [breadCrumbItems, setBreadCrumbItems] = useState<string[]>([]);
  const [page, setPage] = useState(itemsList[0]);
  const location = useLocation();

  useEffect(() => {
    let currentPage = itemsList[0];
    let currentBreadCrumbItems = [currentPage.text];
    if (location.pathname.length > 1) {
      currentPage = itemsList.slice(1).find(item => location.pathname.startsWith(item.path)) ?? currentPage;
      currentBreadCrumbItems = getBreadCrumbItems(currentPage, location.pathname);
    }
    setPage(currentPage)
    setBreadCrumbItems(currentBreadCrumbItems);
  }, [location.pathname]);

  const getBreadCrumbItems = (currentPage: ISidebarItem, pathname: string): string[] => {
    let items = pathname
        .slice(currentPage?.path.length)
        .split("/")
        .filter(el => el)
        .map(el => el.charAt(0).toUpperCase() + el.slice(1));
    return [currentPage.text, ...items];
  }

  return (
    <div className="bread-crumb-container">
      <div className="current-page">
        {page.icon}
        <Typography>{page.text}</Typography>
      </div>
      <Breadcrumbs separator="›" className="bread-crumb" aria-label="breadcrumb">
        {breadCrumbItems.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </Breadcrumbs>
    </div>
  );
};
export default BreadCrumb;