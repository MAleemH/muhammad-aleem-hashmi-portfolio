/* eslint-disable import/no-extraneous-dependencies */
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

const Layout = () => (
  <div className="wrapper">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
