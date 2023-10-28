import React from 'react';
import '../../styles/Header.css';
import {useNavigate } from 'react-router-dom';

function Header() {

  let history= useNavigate();


  return (
    <nav>
    <header className="header">
        <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item" onClick={()=>history("/")}>
            
              Home
            
          </li>
          <li className="nav-item" onClick={() => history("/portfolio")}>

              Portfolio

          </li>
          <li className="nav-item" onClick={() => history("/about")}>
            
              About
          </li>

          <li className="nav-link-contact" onClick={() => history("/contact")}>

              Contact

          </li>
        </ul>
      </nav>
      
    </header>
    </nav>
  );
}

export default Header;
