import React from 'react';
import './Navbar.css';
import logo_light from '../assets/ld.png';
import logo_dark from '../assets/ll.png';
import search_icon_light from '../assets/sd.png';
import search_icon_dark from '../assets/sl (1).png';
import toggle_light from '../assets/td.png';
import toggle_dark from '../assets/tl.png';

const Navbar = ({ theme, setTheme }) => {

  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');  // Use strict comparison (===) here
  };

  return (
    <div className='navbar'>
      <img 
        src={theme === 'light' ? logo_light : logo_dark} 
        alt='Logo'  // Set a meaningful alt attribute
        className='logo' 
      />
      <ul>
        <li>Home</li>
        <li>Course</li>
        <li>Quiz</li>
        <li>About</li>
      </ul>

      <div className='search'>
        <input type="text" placeholder='Search' />
        <img 
          src={theme === 'light' ? search_icon_light : search_icon_dark} 
          alt='Search Icon'  // Set a meaningful alt attribute
        />
      </div>

      <img 
        onClick={toggleMode}
        src={theme === 'light' ? toggle_light : toggle_dark} 
        alt='Toggle Icon'  // Set a meaningful alt attribute
        className='toggle' 
      />
    </div>
  );
};

export default Navbar;
