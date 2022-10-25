import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from '../LeftSide';

const SideMenu = () => {
  return (
    <div>
      <div>
        <LeftSide />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default SideMenu;