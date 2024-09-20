/* eslint-disable import/no-extraneous-dependencies */
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const Layout = () => (
  <div className="wrapper">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export default Layout;
