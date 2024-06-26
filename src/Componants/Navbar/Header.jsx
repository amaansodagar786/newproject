import React, { useState, useEffect } from 'react';
import "./Header.scss";
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
// import { BsPerson, BsCodeSlash } from "react-icons/bs";
// import { CgFileDocument } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import logo from '../../Images/Logo/NWDS-Logo-CDR.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activestate, setActivestate] = useState('');
  const Navigate = useNavigate();





  const showMenu = () => {
    setMenuOpen(!menuOpen);
    const ham = document.getElementsByClassName("NavbarLinks")[0];
    ham.classList.toggle("showNavbar");
  }

  const hideMenu = (id) => {
    setMenuOpen(false);
    const ham = document.getElementsByClassName("NavbarLinks")[0];
    ham.classList.remove("showNavbar");
    setActivestate(id);

  }
  const navigatetohome = (id) => {
    Navigate('/')
    setActivestate(id);

  }

  return (

    <nav className='Navbar'>
      <img onClick={() => navigatetohome('home')}

        className='Logo'
        src={logo} alt="" srcset=""
      />
      
      <div className='Hamburger' onClick={showMenu}>
        {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
      </div>

      <ul className='NavbarLinks'>
        <li id='home' className={activestate === 'home' ? 'active' : ''} onClick={() => hideMenu('home')}>
          <Link to="/">Home</Link>
        </li>
        <li id='about' className={activestate === 'about' ? 'active' : ''} onClick={() => hideMenu('about')}>
          <Link to="/about"> About</Link>
        </li>
        <li id='project' className={activestate === 'project' ? 'active' : ''} onClick={() => hideMenu('project')}>
          <Link to="/service"> Services</Link>
        </li>
        <li id='career' className={activestate === 'career' ? 'active' : ''} onClick={() => hideMenu('career')}>
          <Link to="/career"> Careers</Link>
        </li>
        <li id='contact' className={activestate === 'contact' ? 'active' : ''} onClick={() => hideMenu('contact')}>
          <Link to="/contact"> Contact us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
