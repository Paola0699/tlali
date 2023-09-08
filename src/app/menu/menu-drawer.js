import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MenuDrawerContainer from './menu-drawer-container';

export default function MenuDrawer({ state, toggleDrawer }) {
  return (
    <Drawer
      anchor={'bottom'}
      open={state}
      onClose={toggleDrawer(false)}
    >
      <MenuDrawerContainer />
    </Drawer>
  );
}