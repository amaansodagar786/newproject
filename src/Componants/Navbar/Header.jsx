import React, { useState, useEffect } from 'react';
import './Header.scss';
import { Link, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';
import logo from '../../Images/Logo/NWDS-Logo-CDR.png';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activestate, setActivestate] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure the dropdown is open on mobile view
    if (window.innerWidth <= 800) {
      setDropdownOpen(true);
    }
  }, [menuOpen]);

  const showMenu = () => {
    setMenuOpen(!menuOpen);
    const ham = document.getElementsByClassName('NavbarLinks')[0];
    ham.classList.toggle('showNavbar');
  };

  const hideMenu = (id) => {
    setMenuOpen(false);
    const ham = document.getElementsByClassName('NavbarLinks')[0];
    ham.classList.remove('showNavbar');
    setActivestate(id);
    setDropdownOpen(false); // Close the dropdown when an item is clicked
  };

  const navigatetohome = (id) => {
    navigate('/');
    setActivestate(id);
  };

  const toggleDropdown = (event) => {
    if (window.innerWidth <= 800) {
      return; // Do nothing on mobile view
    }
    event.stopPropagation(); // Prevent event bubbling to avoid closing the dropdown
    setDropdownOpen(!dropdownOpen);
    setActivestate('services');
  };

  return (
    <nav className='Navbar' onClick={() => setDropdownOpen(false)}>
      <img
        onClick={() => navigatetohome('home')}
        className='Logo'
        src={logo}
        alt=''
        srcSet=''
      />
      <div className='Hamburger' onClick={showMenu}>
        {menuOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
      </div>
      <ul className='NavbarLinks' onClick={(e) => e.stopPropagation()}>
        <li
          id='home'
          className={activestate === 'home' ? 'active' : ''}
          onClick={() => hideMenu('home')}
        >
          <Link to='/'>Home</Link>
        </li>
        <li
          id='about'
          className={activestate === 'about' ? 'active' : ''}
          onClick={() => hideMenu('about')}
        >
          <Link to='/about'>About</Link>
        </li>
        <li
          id='services'
          className={activestate === 'services' ? 'active' : ''}
          onClick={toggleDropdown}
        >
          <Link>
            <span className='service1'>
              Services <IoIosArrowDown className='serviceicon' />
            </span>
          </Link>
          <ul className={`Dropdown ${dropdownOpen ? 'show' : ''} ${window.innerWidth <= 800 ? 'show-mobile' : ''}`}>
            <li onClick={() => hideMenu('service1')}>
              <Link to='/hrconsultancy'>HR Consultancy</Link>
            </li>
            <li onClick={() => hideMenu('service2')}>
              <Link to='/eventmanage'>Event Management</Link>
            </li>
            <li onClick={() => hideMenu('service3')}>
              <Link to='/insurance'>Insurance</Link>
            </li>
          </ul>
        </li>
        <li
          id='career'
          className={activestate === 'career' ? 'active' : ''}
          onClick={() => hideMenu('career')}
        >
          <Link to='/career'>Careers</Link>
        </li>
        <li
          id='contact'
          className={activestate === 'contact' ? 'active' : ''}
          onClick={() => hideMenu('contact')}
        >
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
