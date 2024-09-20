/* eslint-disable import/no-extraneous-dependencies */
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'projects', text: 'Projects' },
  { path: 'contact', text: 'Contact' },
];

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navTitle">Portfolio</h1>
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
