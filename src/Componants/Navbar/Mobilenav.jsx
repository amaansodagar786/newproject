import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';
import logo from '../../Images/Logo/NWDS-Logo-CDR.png';
import './MobileNavbar.scss';

const MobileNavbar = ({ activeState, setActiveState }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // State to manage expanded services
  const navigate = useNavigate();

  useEffect(() => {
    // Function to toggle body class for scroll lock
    const toggleBodyScroll = () => {
      if (menuOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    };

    toggleBodyScroll(); // Initial setup
    return () => {
      document.body.classList.remove('no-scroll'); // Cleanup
    };
  }, [menuOpen]);

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const hideMenu = (id) => {
    setMenuOpen(false);
    setActiveState(id);
  };

  const navigateToHome = (id) => {
    navigate('/');
    setActiveState(id);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
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
          onClick={toggleServices} // Toggle services visibility on click
        >
          <Link to='#'>Services</Link>
          <ul className={`ServicesDropdown ${servicesOpen ? 'showServices' : ''}`}>
            <li>
              <Link to='/hrconsultancy'>HR Consultancy</Link>
            </li>
            <li>
              <Link to='/eventmanage'>Event Management</Link>
            </li>
            <li>
              <Link to='/insurance'>Insurance</Link>
            </li>
          </ul>
        </li>
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
