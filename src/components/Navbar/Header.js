import React from 'react';
import '../../styles/Header.css';

// import link from react-dom
import { Link } from 'react-router-dom';

// import Home from '../Home/Home'

function Header() {
  return (
    <header className="header">
        <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link  to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-link-contact">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
