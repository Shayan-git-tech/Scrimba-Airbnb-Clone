import React from 'react'

export default function Header() {
    return (
      <header>
      <div className='logo-container'>
      <img src={`${process.env.PUBLIC_URL}/Images/Color-Airbnb-Logo.jpg`} alt="Logo" className='logo'/>
      </div>
    </header>
    );
  }