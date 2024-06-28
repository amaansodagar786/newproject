import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import logo from '../../Images/Logo/NWDS-Logo-CDR.png';
import './DesktopNavbar.scss';

const DesktopNavbar = ({ activeState, setActiveState, toggleDropdown, dropdownOpen }) => {
  const navigate = useNavigate();

  const navigateToHome = (id) => {
    navigate('/');
    setActiveState(id);
  };

  return (
    <nav className='DesktopNavbar'>
      <img
        onClick={() => navigateToHome('home')}
        className='Logo'
        src={logo}
        alt='NWDS Logo'
      />
      <ul className='NavbarLinks'>
        <li
          id='home'
          className={activeState === 'home' ? 'active' : ''}
          onClick={() => setActiveState('home')}
        >
          <Link to='/'>Home</Link>
        </li>
        <li
          id='about'
          className={activeState === 'about' ? 'active' : ''}
          onClick={() => setActiveState('about')}
        >
          <Link to='/about'>About</Link>
        </li>
        <li
          id='services'
          className={activeState === 'services' ? 'active' : ''}
          onClick={toggleDropdown}
        >
          <Link>
            <span className='service1'>
              Services <IoIosArrowDown className='serviceicon' />
            </span>
          </Link>
          <ul className={`Dropdown ${dropdownOpen ? 'show' : ''}`}>
            <li onClick={() => setActiveState('service1')}>
              <Link to='/hrconsultancy'>HR Consultancy</Link>
            </li>
            <li onClick={() => setActiveState('service2')}>
              <Link to='/eventmanage'>Event Management</Link>
            </li>
            <li onClick={() => setActiveState('service3')}>
              <Link to='/insurance'>Insurance</Link>
            </li>
          </ul>
        </li>
        <li
          id='career'
          className={activeState === 'career' ? 'active' : ''}
          onClick={() => setActiveState('career')}
        >
          <Link to='/career'>Careers</Link>
        </li>
        <li
          id='contact'
          className={activeState === 'contact' ? 'active' : ''}
          onClick={() => setActiveState('contact')}
        >
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
