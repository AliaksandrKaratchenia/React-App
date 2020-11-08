import React, { ReactNode } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { IconButton, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./SwipeableDrawer.scss";
import classNames from "classnames";

export enum SwipeableDrawerCollapseDirection {
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
}

interface SwipeableTemporaryDrawerProps {
  collapseDirection: SwipeableDrawerCollapseDirection;
  open: boolean;
  title?: string;
  icon?: ReactNode;
  onClose: () => void;
}

const SwipeableTemporaryDrawer: React.FC<SwipeableTemporaryDrawerProps> = ({
  collapseDirection,
  open,
  title,
  icon,
  onClose,
  children,
}) => {
  return (
    <>
      <SwipeableDrawer
        className="swipeable-drawer"
        anchor={collapseDirection}
        open={open}
        disableDiscovery={true}
        onOpen={() => {}}
        onClose={onClose}
      >
        <div className="container">
          <div className={classNames({
            "header": true,
            "header-only-close": !(title || icon),
          })}>
            <div className="left-side">
              {icon}
              {title && <Typography>{title}</Typography>}
            </div>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className="children">
            {children}
          </div>
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default SwipeableTemporaryDrawer;