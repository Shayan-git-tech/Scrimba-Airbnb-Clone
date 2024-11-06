import React from 'react'
import { Link } from 'react-router-dom';
export default function Header({logo, bgColor, title}) {
    return (
      <header style={{background: `${bgColor}`}}>
      <div className='logo-container'>
      <Link to="/">
      <img src={logo} alt="Logo" className='logo'/>
      <span>{title}</span>
      </Link>
      </div>
      <nav className="navbar">
        <ul>
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/tools">Tools</Link></li>
        </ul>
      </nav>
    </header>
    );
  }