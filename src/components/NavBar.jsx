import React, { useState } from 'react'
import logo from '../assets/images/logo.jpg'
import hamburger from '../assets/images/hamburger.png'
import { NavLink, Link } from 'react-router-dom'
import '../css/navBar.css'
import '../global.css'


const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isDropdownBlog, setIsDropdownBlog] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(prevMode => { return ((!prevMode)) })
  }

  const toggleDropdownBlog = () => {
    setIsDropdownBlog(prevMode => { return ((!prevMode)) })
  }

  const [hamburgerClick, setHamburgerClick] = useState(false)
  const toggleHamburger = () => {
    setHamburgerClick(!hamburgerClick)
  }


  return (
    <nav>
      <img src={logo} alt="Vivien Oti Poverty Relief Initiative Logo" />
      <ul className={`navLinksContainer ${hamburgerClick ? 'showNav' : ""}`}>
        <li><NavLink to='./Home'>Home</NavLink></li>
        <li> <span className="about-link" onClick={toggleDropdown} >About Us  {isDropdownOpen ? '\u25B2' : '\u25BC'}</span>

          {isDropdownOpen &&
            <ul className='about-us-drop-down'>
              <li><Link to='./About'>About Us</Link></li>
              <li><Link to='./About/OurStory'>Our Story</Link></li>
              <li><Link to='./About/OurTeam'>Our Team</Link></li>
            </ul>}
        </li>
        <li> <span className='newsandblog-link' onClick={toggleDropdownBlog}>News & Blog {isDropdownBlog ? '\u25B2' : '\u25BC'}</span>
          {isDropdownBlog &&
            <ul className='newsandblog-dropdown'>
              <li><Link to='./NewsAndBlog/OurBlog'>Our Blog</Link></li>
              <li><Link to='./NewsAndBlog/NewsArchive'>News Archive</Link></li>
            </ul>}
        </li>
        <li> <NavLink to='./Multimedia'>Multimedia</NavLink></li>
        <li><NavLink to='./GetInvolved'>Get Involved</NavLink></li>
      </ul>
      <img src={hamburger} alt="" className='hamburger' onClick={toggleHamburger} />
    </nav>
  )
}

export default NavBar
