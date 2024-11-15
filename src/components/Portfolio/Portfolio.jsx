import "./Portfolio.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import port1 from '../../assets/uiux(2).jpg'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'
import video4 from '../../assets/video4.mp4'
import video5 from '../../assets/video5.mp4'
import video6 from '../../assets/video6.mp4'
import port12 from '../../assets/port12.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
import port4 from '../../assets/port4.png'
import port5 from '../../assets/port5.png'
import port6 from '../../assets/port6.png'
import viewIcon from '../../assets/view.png'
import gitIcon from '../../assets/gitWhite.png'
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {BrowserRouter as Router, Link} from 'react-router-dom' 
import { useTheme } from "../ThemeContext";

const Portfolio = () => {
    const {theme} = useTheme();
    useEffect(() => {
        AOS.init({
          once:true,
          mirror:false,

        });
      }, [])

      const handleMouseOver =(e)=>{
        e.target.play();
      }
      const handleMouseOut =(e)=>{
        e.target.pause();
      }
  return (
    <section id="portfolio1" className={theme==='dark'?'dark-theme':'light-theme'}>
      <span className="skillTitle" data-aos='fade-right'>My Projects</span>
      <span className="skillDesc" data-aos='fade'>
        Explore my projects to see how I create visually appealing,
        user-friendly websites, intuitive apps, and inclusive, user-centered
        interfaces that enhance digital experiences.
      </span>
      <div className="portImages">
        <div className="portImg" data-aos='zoom-in-up'>
        
                
                    {/* <img  loading='lazy'src={port12} className="portImgs" alt="Portfolio 1" /> */}
                    <video className="portImgs" src={video1} muted loop preload="none" disablePictureInPicture controllist='nodownload nofullscreen'  poster={port12} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    </video>
            
            <div className="icons">
                <div className="blurBg">
                <Router>
                <Link  to='https://drive.google.com/file/d/1u9DWyDEuSZyZT6JvaXTxI-VRXGk_Tlyc/view?usp=drive_link' target="_blank">
                <Tippy content="View Website">
                    <img  loading='lazy'src={viewIcon} alt="view icon" className="blur1" />
                  
                </Tippy>
                </Link>
                </Router>
                </div>
                <div className="blurBg">
                <Router>
                <Link to='https://github.com/yathish1204/Educity---EWCE-Website' target="_blank">
                <Tippy content='git'>
                <img  loading='lazy'src={gitIcon} alt="git icon" className="blur1" />
                </Tippy>
                </Link>
                </Router>
                </div>
            </div>
        </div>
        <div className="portImg" data-aos='zoom-in-up'>
        
                
                    {/* <img  loading='lazy'src={port2} className="portImgs" alt="Portfolio 1" /> */}
                    <video className="portImgs" src={video2} muted loop preload="none" disablePictureInPicture controllist='nodownload nofullscreen' poster={port2} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    </video>
                
            
            <div className="icons">
                <div className="blurBg">
                <Router>
                <Link  to='https://drive.google.com/file/d/19YYAPRYTBsgb545iNhiGZsRLIgcFljni/view?usp=drive_link' target="_blank">
                <Tippy content="View Website">
                    <img  loading='lazy'src={viewIcon} alt="view icon" className="blur1" />
                </Tippy>
                </Link>
                </Router>
                </div>
                <div className="blurBg">
                <Router>
                <Link to='https://github.com/yathish1204' target="_blank">
                <Tippy content='git'>
                <img  loading='lazy'src={gitIcon} alt="git icon" className="blur1" />
                </Tippy>
                </Link>
                </Router>
                </div>
            </div>
        </div>
        <div className="portImg" data-aos='zoom-in-up'>
        
                
                    {/* <img  loading='lazy'src={port3} className="portImgs" alt="Portfolio 1" /> */}
                    <video className="portImgs" src={video3} muted loop preload="none" disablePictureInPicture controllist='nodownload nofullscreen' poster={port3} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    </video>
                
            
            <div className="icons">
                <div className="blurBg">
                <Router>
                <Link  to='https://drive.google.com/file/d/1qxkjoI9SnxMmABJX_rtJ2ULyzmP47glw/view?usp=drive_link' target="_blank">
                <Tippy content="View Website">
                    <img  loading='lazy'src={viewIcon} alt="view icon" className="blur1" />
                </Tippy>
                </Link>
                </Router>
                </div>
                <div className="blurBg">
                <Router>
                <Link to='https://github.com/yathish1204/Smart-Quiz-Quest4' target="_blank">
                <Tippy content='git'>
                <img  loading='lazy'src={gitIcon} alt="git icon" className="blur1" />
                </Tippy>
                </Link>
                </Router>
                </div>
            </div>
        </div>
        <div className="portImg" data-aos='zoom-in-up'>
        
                
                    {/* <img  loading='lazy'src={port4} className="portImgs" alt="Portfolio 1" /> */}
                    <video className="portImgs" src={video4} muted loop preload="none" disablePictureInPicture controllist='nodownload nofullscreen' poster={port4} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    </video>
                
            
            <div className="icons">
                <div className="blurBg">
                <Router>
                <Link  to='https://drive.google.com/file/d/1ACkVLK-oSAwJex29QKak3BOvLEXpqVnJ/view?usp=drive_link' target="_blank">
                <Tippy content="View Website">
                    <img  loading='lazy'src={viewIcon} alt="view icon" className="blur1" />
                </Tippy>
                </Link>
                </Router>
                </div>
                <div className="blurBg">
                <Router>
                <Link to='https://github.com/yathish1204/currencyConvertorPro' target="_blank">
                <Tippy content='git'>
                <img  loading='lazy'src={gitIcon} alt="git icon" className="blur1" />
                </Tippy>
                </Link>
                </Router>
                </div>
            </div>
        </div>
        <div className="portImg" data-aos='zoom-in-up'>
        
                
                    {/* <img  loading='lazy'src={port5} className="portImgs" alt="Portfolio 1" /> */}
                    <video className="portImgs" src={video5} muted loop preload="none" disablePictureInPicture controllist='nodownload nofullscreen' poster={port5} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    </video>
                
            
            <div className="icons">
                <div className="blurBg">
                <Router>
                <Link  to='https://drive.google.com/file/d/1oEx3643NOXeoPMT8NWqwHanK1TiYR-Wa/view?usp=drive_link' target="_blank">
                <Tippy content="View Website">
                    <img  loading='lazy'src={viewIcon} alt="view icon" className="blur1" />
                </Tippy>
                </Link>
                </Router>
                </div>
                <div className="blurBg">
                <Router>
                <Link to='https://github.com/yathish1204/Portfolio-Website-' target="_blank">
                <Tippy content='git'>
                <img  loading='lazy'src={gitIcon} alt="git icon" className="blur1" />
                </Tippy>
                </Link>
                </Router>
                </div>
            </div>
        </div>
        <div className="portImg" data-aos='zoom-in-up'>
        
                
                    {/* <img  loading='lazy'src={port6} className="portImgs" alt="Portfolio 1" /> */}
                    <video className="portImgs" src={video6} muted loop preload="none" disablePictureInPicture controllist='nodownload nofullscreen' poster={port6} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                    </video>
                
            
            <div className="icons">
                <div className="blurBg">
                <Router>
                <Link  to='https://drive.google.com/file/d/1inzYwYTrIdDjbQoeGCQ5TacWXQUGL3xX/view?usp=drive_link' target="_blank">
                <Tippy content="View Website">
                    <img  loading='lazy'src={viewIcon} alt="view icon" className="blur1" />
                </Tippy>
                </Link>
                </Router>
                </div>
                <div className="blurBg">
                <Router>
                <Link to='https://github.com/yathish1204/yathish1204-Text-GPT---generative-pretrained-transformer/tree/main' target="_blank">
                <Tippy content='git'>
                <img  loading='lazy'src={gitIcon} alt="git icon" className="blur1" />
                </Tippy>
                </Link>
                </Router>
                </div>
            </div>
        </div>

      </div>
      <Tippy content="Thank you for your interests in my project's. All projects are available in the LinkedIn project section" delay={100} duration={2000}>
      <button className="navBtn 
      
      portBtn">Explore more</button>
      </Tippy>
    </section>
  );
};

export default Portfolio;
