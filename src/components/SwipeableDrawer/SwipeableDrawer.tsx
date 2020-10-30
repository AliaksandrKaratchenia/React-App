import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import "./SwipeableDrawer.scss";

export enum SwipeableDrawerCollapseDirection {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right"
}

interface SwipeableTemporaryDrawerProps {
    collapseDirection: SwipeableDrawerCollapseDirection,
    open: boolean,
    onClose: () => void
}

const SwipeableTemporaryDrawer: React.FC<SwipeableTemporaryDrawerProps> = ({ collapseDirection, open, onClose, children }) => {
    return (
        <>
            <SwipeableDrawer
                className="swipeable-drawer"
                anchor={collapseDirection}
                open={open}
                disableDiscovery={true}
                onOpen={() => { }}
                onClose={onClose}
            >
                <div>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                    <div style={{ padding: 20 }}>
                        {children}
                    </div>
                </div>
            </SwipeableDrawer>
        </>
    );
}

export default SwipeableTemporaryDrawer;