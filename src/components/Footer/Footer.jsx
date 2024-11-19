import React,{useEffect, useState} from 'react'
import './Footer.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import linkedIn from '../../assets/LinkedInlinkedin.png'
import gitHub from '../../assets/GitHubgithubTeal.png'
import behance from '../../assets/Behancebehance.png'
import twitter from '../../assets/x.png'
import insta from '../../assets/instagraminsta.png'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import moon from '../../assets/moon-solidAgain.svg'
import sun from '../../assets/sun-solid (1).svg'
import { useTheme} from '../ThemeContext'
import {Link as ScrollLink} from 'react-scroll'
import Rating from '../Rating/Rating'



const Footer = () => {
  const year = new Date().getFullYear();
  const{theme, toggleTheme} = useTheme();

  useEffect(() => {
    AOS.init({
      once:true,
      mirror:false
    });
  }, [])
  
 
  return (
    <section id="footer" className={theme==='dark'?'dark-theme':'light-theme'}>
         
        {/* {theme==='light'?<Tippy content='Toggle Dark mode'><img  loading='lazy' style={{width:'40px',height:'40px',objectFit:'contain'}}  onClick={toggleTheme} src={moon} alt="mode" className='icon' data-aos='fade'  /></Tippy>
        :<Tippy content='Toggle light mode'><img  loading='lazy'style={{width:'40px', height:'40px', objectFit:'cover'}} onClick={toggleTheme} src={sun} alt="mode" className='icon' data-aos='fade'  /></Tippy>} */}
        
        
        <div className="navigationLinks" data-aos='fade-right'>
            <h2>Navigation Links</h2>
            
            <ul>
              <ScrollLink to='intro'  smooth='true' offset={-140} duration={500} ><li>Home</li></ScrollLink>
              <ScrollLink to='skills'  smooth='true' offset={-140} duration={500} ><li>About</li></ScrollLink>
              <ScrollLink to='portfolio'  smooth='true' offset={-140} duration={500} ><li>Project</li></ScrollLink>
              {/* <ScrollLink to='ach'  smooth='true' offset={-140} duration={500} ><li>Achievement</li></ScrollLink> */}
              
            </ul>
        </div>
        <div className="socialLinks" data-aos='fade-right'>
            <h2>Social Media</h2>
            <ul>
                <li>
                <Router>
                <Link
                  to="https://www.linkedin.com/in/syed-inayath-49401a184/"
                  target="_blank"
                >
                 <Tippy content='linkedIn'>
                        <img  loading='lazy'src={linkedIn} alt="" />
                    </Tippy>
                </Link>
              </Router>     
                </li>
                <li>
                <Router>
                <Link
                  to="https://github.com/innu1193"
                  target="_blank"
                >
                 <Tippy content='gitHub'>
                        <img  loading='lazy'src={gitHub} alt="" />
                    </Tippy>
                </Link>
              </Router>     
                </li>
                {/* <li>
                <Router>
                <Link
                  to="https://www.behance.net/yathishshettigar"
                  target="_blank"
                >
                 <Tippy content='behance'>
                        <img  loading='lazy'src={behance} alt="" />
                    </Tippy>
                </Link>
              </Router>     
                </li> */}
                <li>
                <Router>
                <Link
                  to="https://x.com/_inayath_"
                  target="_blank"
                >
                 <Tippy content='twitter'>
                        <img  loading='lazy' src={twitter} alt="" className='xlogo' />
                    </Tippy>
                </Link>
              </Router>     
                </li>
                <li>
                <Router>
                <Link
                  to="https://www.instagram.com/_.inayath._/"
                  target="_blank"
                >
                 <Tippy content='instagram'>
                        <img  loading='lazy' src={insta} alt="" />
                    </Tippy>
                </Link>
              </Router>     
                </li>
            </ul>
        </div>
        <Rating/>
        <hr />
        <p >copyright ©️ {year} Syed Inayath. All rights reserved.</p>
    </section>
  )
}

export default Footer
