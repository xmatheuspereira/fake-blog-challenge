import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaBloggerB } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">
          <img src={logo} alt="Fake Blog" />
        </h1>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">
                <FaBloggerB style={{ color: 'black' }} className="icons" />
              </Link>
            </li>
            <li>
              <Link to="/users">
                <FaUsers style={{ color: 'black' }} className="icons" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
