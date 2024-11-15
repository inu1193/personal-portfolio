import React,{useEffect, useState} from 'react'
import './Footer.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import linkedIn from '../../assets/LinkedInlinkedin.png'
import gitHub from '../../assets/GitHubgithubTeal.png'
import behance from '../../assets/Behancebehance.png'
import twitter from '../../assets/Twittertwitter.png'
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
              <ScrollLink to='portfolio'  smooth='true' offset={-140} duration={500} ><li>Portfolio</li></ScrollLink>
              <ScrollLink to='ach'  smooth='true' offset={-140} duration={500} ><li>Achievement</li></ScrollLink>
              
            </ul>
        </div>
        <div className="socialLinks" data-aos='fade-right'>
            <h2>Social Media</h2>
            <ul>
                <li>
                <Router>
                <Link
                  to="https://www.linkedin.com/in/yathishshettigar"
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
                  to="https://github.com/yathish1204"
                  target="_blank"
                >
                 <Tippy content='gitHub'>
                        <img  loading='lazy'src={gitHub} alt="" />
                    </Tippy>
                </Link>
              </Router>     
                </li>
                <li>
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
                </li>
                <li>
                <Router>
                <Link
                  to="https://x.com/YathishShe57208?t=iFvwUTfSou16Fb42c2Ilhg&s=08"
                  target="_blank"
                >
                 <Tippy content='twitter'>
                        <img  loading='lazy' src={twitter} alt="" />
                    </Tippy>
                </Link>
              </Router>     
                </li>
                <li>
                <Router>
                <Link
                  to="https://www.instagram.com/y_shettigar2001?utm_source=qr&igsh=MWFwc2s2ZHR3NTJi"
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
        <p >copyright ©️ 2024 Syed Inayath. All rights reserved.</p>
    </section>
  )
}

export default Footer
