/* eslint-disable import/no-extraneous-dependencies */
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logos/logo.png';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'experience', text: 'Experience' },
  { path: 'projects', text: 'Projects' },
  { path: 'contact', text: 'Contact' },
];

const Navbar = () => (
  <nav className="navbar fixed-top">
    <a className="navbar-brand" href="/">
      <img src={logo} alt="Logo" width="55" height="55" className="d-inline-block" />
    </a>

    <ul className="navItems">
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
