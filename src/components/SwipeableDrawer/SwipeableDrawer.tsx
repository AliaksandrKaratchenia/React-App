import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import { ISwipeableDrawerModel } from '../../store/models';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store/reducers';
import { closeSwipeableDrawer } from '../../store/actions/swipeableDrawerActions';

const SwipeableTemporaryDrawer: React.FC = () => {
    const swipeableDrawer = useSelector<IState, ISwipeableDrawerModel | undefined>(state => state.swipeableDrawer?.openDrawer); 
    const dispatch = useDispatch();

    const closeDrawer = () => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        dispatch(closeSwipeableDrawer());
    };

    return (
        <>
            {swipeableDrawer &&
                <SwipeableDrawer
                    anchor={swipeableDrawer.collapse_direction}
                    open={true}
                    onOpen={() => { }}
                    onClose={() => { }}
                >
                    <div>
                        <Button onClick={closeDrawer()}>Close</Button>
                        {swipeableDrawer.content}
                    </div>
                </SwipeableDrawer>}
        </>
    );
}

export default SwipeableTemporaryDrawer;