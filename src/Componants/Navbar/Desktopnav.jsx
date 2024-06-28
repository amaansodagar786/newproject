import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/Logo/NWDS-Logo-CDR.png';
import './DesktopNavbar.scss';
import { IoIosArrowDown } from 'react-icons/io';

const DesktopNavbar = ({ activeState, setActiveState, toggleDropdown, dropdownOpen, setDropdownOpen }) => {
  const navigate = useNavigate();

  const navigateToHome = (id) => {
    navigate('/');
    setActiveState(id);
  };

  const handleLinkClick = (id) => {
    setActiveState(id);
    setDropdownOpen(false);  // Close the dropdown when any link is clicked
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
          onClick={() => handleLinkClick('home')}
        >
          <Link to='/'>Home</Link>
        </li>
        <li
          id='about'
          className={activeState === 'about' ? 'active' : ''}
          onClick={() => handleLinkClick('about')}
        >
          <Link to='/about'>About</Link>
        </li>
        <li
          id='services'
          className={activeState === 'services' ? 'active' : ''}
          onClick={toggleDropdown}
        >
          <Link>
            <span className='service11'>
              Services <span><IoIosArrowDown className='srvcicon' /></span>
            </span>
          </Link>
          <ul className={`Dropdown ${dropdownOpen ? 'show' : ''}`}>
            <li onClick={() => handleLinkClick('service1')}>
              <Link to='/hrconsultancy'>HR Consultancy</Link>
            </li>
            <li onClick={() => handleLinkClick('service2')}>
              <Link to='/eventmanage'>Event Management</Link>
            </li>
            <li onClick={() => handleLinkClick('service3')}>
              <Link to='/insurance'>Insurance</Link>
            </li>
          </ul>
        </li>
        <li
          id='career'
          className={activeState === 'career' ? 'active' : ''}
          onClick={() => handleLinkClick('career')}
        >
          <Link to='/career'>Careers</Link>
        </li>
        <li
          id='contact'
          className={activeState === 'contact' ? 'active' : ''}
          onClick={() => handleLinkClick('contact')}
        >
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
