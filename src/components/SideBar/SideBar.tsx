import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import StorageIcon from "@material-ui/icons/Storage";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import { Toolbar } from "@material-ui/core";
import classNames from "classnames";
import "./SideBar.scss";

export interface ISidebarItem {
  text: string,
  icon: JSX.Element,
  path: string
}

export const itemsList: ISidebarItem[] = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/"
    },
    {
      text: "Data",
      icon: <StorageIcon />,
      path: "/data"
    },
    {
      text: "Settings",
      icon: <SettingsIcon />,
      path: "/settings"
  
    }
  ];

const SideBar: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <Drawer variant="permanent"
      className={classNames({
        'sidebar': true,
        'sidebar-open': open,
        'sidebar-close': !open
      })}
      classes={{
        paper: classNames({
          'sidebar-open': open,
          'sidebar-close': !open,
        })
      }}>
      <Toolbar />
      <div className="sidebar-container">
        <List>
          {itemsList.map(item => (
            <ListItem className="menu-item" key={item.text} button component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItem>
          ))}
        </List>
        <IconButton
          onClick={() => setOpen(!open)}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
    </Drawer>
  );
};
export default SideBar;