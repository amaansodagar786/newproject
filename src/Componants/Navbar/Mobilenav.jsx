import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';
import logo from '../../Images/Logo/NWDS-Logo-CDR.png';
import './MobileNavbar.scss';
import { IoIosArrowDown } from 'react-icons/io';

const MobileNavbar = ({ activeState, setActiveState }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const hideMenu = (id) => {
    setMenuOpen(false);
    setActiveState(id);
    setServicesOpen(!servicesOpen);

  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const navigateToHome = (id) => {
    navigate('/');
    setActiveState(id);
  };

  return (
    <nav className='MobileNavbar'>
      <img
        onClick={() => navigateToHome('home')}
        className='Logo'
        src={logo}
        alt='NWDS Logo'
      />
      <div className='Hamburger' onClick={showMenu}>
        {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
      </div>
      <ul className={`NavbarLinks ${menuOpen ? 'showNavbar' : ''}`}>
        <li
          id='home'
          className={activeState === 'home' ? 'active' : ''}
          onClick={() => hideMenu('home')}
        >
          <Link to='/'>Home</Link>
        </li>
        <li
          id='about'
          className={activeState === 'about' ? 'active' : ''}
          onClick={() => hideMenu('about')}
        >
          <Link to='/about'>About</Link>
        </li>
        <li
          id='services'
          className={activeState === 'services' ? 'active' : ''}
          onClick={toggleServices}
        >
          Services  <IoIosArrowDown className='mobilesrvcicon' /> 
        </li>
        <ul className={`ServicesDropdown ${servicesOpen ? 'showDropdown' : ''}`}>
          <li
            id='hrconsultancy'
            className={activeState === 'services' ? 'active' : ''}
            onClick={() => hideMenu('services')}
          >
            <Link to='/hrconsultancy'>HR Consultancy</Link>
          </li>
          <li
            id='eventmanage'
            className={activeState === 'eventmanage' ? 'active' : ''}
            onClick={() => hideMenu('eventmanage')}
          >
            <Link to='/eventmanage'>Event Management</Link>
          </li>
          <li
            id='insurance'
            className={activeState === 'insurance' ? 'active' : ''}
            onClick={() => hideMenu('insurance')}
          >
            <Link to='/insurance'>Insurance</Link>
          </li>
        </ul>
        <li
          id='career'
          className={activeState === 'career' ? 'active' : ''}
          onClick={() => hideMenu('career')}
        >
          <Link to='/career'>Careers</Link>
        </li>
        <li
          id='contact'
          className={activeState === 'contact' ? 'active' : ''}
          onClick={() => hideMenu('contact')}
        >
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
