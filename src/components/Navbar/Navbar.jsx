import React,{useState} from 'react'
import './Navbar.css'
import logo from '../../assets/SILogo.png'
import logo1 from '../../assets/ysLightlogo.png'
import {Link} from 'react-scroll'
import call from '../../assets/Callcall.png'
import { useTheme } from '../ThemeContext'
import menuLight from '../../assets/bars-solid.svg'
import menuDark from '../../assets/bars-solidD.svg'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import moon from '../../assets/moon-solidAgain.svg'
import sun from '../../assets/sun-solid (1).svg'
import darkCross from '../../assets/xmark-soliddark.svg'
import lightCross from '../../assets/xmark-solidlight.svg'



const Navbar = () => {


  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    setMobileMenu(!mobileMenu);
  }

  const [desktopMenuRight, setDesktopMenuRight] = useState('');
  
  const handleToggle = () => {
    const desktopMenu = document.querySelector('.desktopMenu');
    if (desktopMenuRight === 0) {
      desktopMenu.style.right = '-260px';
      setDesktopMenuRight(-260);
    } else {
      desktopMenu.style.right = '0';
      setDesktopMenuRight(0);
    }
  };

  
  const{theme, toggleTheme}=useTheme();
  return (
    <nav  className={`navbar ${theme==='dark'?'dark-theme':'light-theme'}`}>
      <div className='navSpan'>
        {theme==='dark'?<img  src={logo} alt="logo" className='logo' />:<img src={logo} alt="logo" className='logo' />}
        Inayath</div>
    
      <div className='libtn'>
      <div className={`desktopMenu ${mobileMenu?'':'hideMobileMenu'}`}>
        <Link activeClass='active' onClick={() => {
            toggleMenu();
            handleToggle();
          }} to='intro'  smooth={true} offset={-160} duration={500} className='desktopMenuListItem'   >Home</Link>
        <Link activeClass='active' onClick={() => {
            toggleMenu();
            handleToggle();
          }} to='skills' smooth={true} offset={-140} duration={500}  className='desktopMenuListItem'    >About</Link>
        <Link activeClass='active' onClick={() => {
            toggleMenu();
            handleToggle();
          }} to='portfolio' smooth={true} offset={-140} duration={500}  className='desktopMenuListItem'    >Projects</Link>
        {/* <Link activeClass='active' onClick={() => {
            toggleMenu();
            handleToggle();
          }} to='slid' smooth={true} offset={-140} duration={500}  className='desktopMenuListItem'    >Achievements</Link> */}
      <Link to='contact' onClick={() => {
            toggleMenu();
            handleToggle();
          }} className="navBtn" smooth={true} offset={-140} duration={500} >Contact Me</Link>
      <div className='navMode'>
      {/* {theme==='light'?<img  style={{width:'34px',height:'34px',objectFit:'contain',color:'var(--text-color)'}}  onClick={toggleTheme} src={moon} alt="mode" className='icon' data-aos='fade'  />
        :<img style={{width:'34px', height:'34px', objectFit:'contain'}} onClick={toggleTheme} src={sun} alt="mode" className='icon' data-aos='fade'  />} */}
      </div>
      </div>
      
      <img
          onClick={() => {
            toggleMenu();
            handleToggle();
          }}
          
          src={mobileMenu ? (theme === 'dark' ? lightCross : darkCross) : (theme === 'dark' ? menuDark : menuLight)}
          alt='menu icon'
          className='mob-menu'
        />
      </div>
      
    </nav>
  )
}

export default Navbar
