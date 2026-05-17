import React from 'react'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import search_black from '../../assets/search-b.png'
import search_white from '../../assets/search-w.png'
import './NavbarTut.css'

const NavbarTut = ( { theme, setTheme } ) => {

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <div className={`navbar ${theme}`}>
      <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" className='navbar-logo' />
      <ul className={`navbar-links ${theme}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className={`search-box ${theme}`}>
        <input type="text" placeholder="Search..." />
        <img src={theme === 'light' ? search_white : search_black} alt="Search" className='search-icon'/>
      </div>
        <img onClick={toggleTheme} src={theme === 'light' ? toggle_light : toggle_dark} alt="Toggle" className='toggle-icon'/>
    </div>
  )
}

export default NavbarTut