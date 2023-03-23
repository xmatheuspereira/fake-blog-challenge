import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Fake Blog</h1>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Usuários</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
