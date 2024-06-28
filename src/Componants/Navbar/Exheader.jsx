import React, { useState, useEffect } from 'react';
import DesktopNavbar from './Desktopnav';
import MobileNavbar from './Mobilenav';

const Exheader = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [activeState, setActiveState] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = (event) => {
    if (isMobile) {
      return;
    }
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
    setActiveState('services');
  };

  return (
    <>
      {isMobile ? (
        <MobileNavbar activeState={activeState} setActiveState={setActiveState} />
      ) : (
        <DesktopNavbar
          activeState={activeState}
          setActiveState={setActiveState}
          toggleDropdown={toggleDropdown}
          dropdownOpen={dropdownOpen}
        />
      )}
    </>
  );
};

export default Exheader;
