import React, {useState} from 'react';
import '../styles/header.css';
import {Link} from "react-router-dom";
import logoImg from '../images/1.png';

const Navbar = (props) => {
  return(
    <div className='navbar'>
      <Link to="home"><div className="navbar-logo"><img src={logoImg} alt="logo"/></div></Link>
      <div className="navbar-list">
        <ul className="navbar-menu">
        <Link to="genres" className="hvr">
          <li className="submenu">жанры</li>
        </Link>
        <Link to="marks" className="hvr">
          <li className="submenu">закладки</li>
        </Link>
        <Link to="about" className="hvr">
          <li className="submenu">о нас</li>
        </Link>
        <Link to="contacts" className="hvr">
          <li className="submenu">контакты</li>
        </Link>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;