import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

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
                anchor={collapseDirection}
                open={open}
                onOpen={() => { }}
                onClose={() => { }}
            >
                <div>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                    {children}
                </div>
            </SwipeableDrawer>
        </>
    );
}

export default SwipeableTemporaryDrawer;