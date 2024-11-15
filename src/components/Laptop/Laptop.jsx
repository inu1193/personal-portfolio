import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// import port1 from '../../assets/uiux(2).jpg'
// import video1 from '../../assets/video1.mp4'
// import video2 from '../../assets/video2.mp4'
// import video3 from '../../assets/video3.mp4'
// import video4 from '../../assets/video4.mp4'
// import video5 from '../../assets/video5.mp4'
// import video6 from '../../assets/video6.mp4'
// import port12 from '../../assets/port12.png'
// import port2 from '../../assets/port2.png'
// import port3 from '../../assets/port3.png'
// import port4 from '../../assets/port4.png'
// import port5 from '../../assets/port5.png'
// import port6 from '../../assets/port6.png'
// import viewIcon from '../../assets/view.png'
// import gitIcon from '../../assets/gitWhite.png'
import React,{useEffect, useState} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {BrowserRouter as Router, Link} from 'react-router-dom' 
import { useTheme } from "../ThemeContext";
import './Laptop.css'
import lapFrame from '../../assets/LaptopMain.png'
import {lapdet} from './index.js'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Laptop = () => {

    const [page, setPage] = useState(1);

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


      const selectPageHandle = (selectedPage)=>{
        if(selectedPage>=1 && selectedPage<=lapdet.length/3 && Selection!==page){ 
            setPage(selectedPage);
        }
      }

      const scrollToPortfolio = () => {
        const section = document.getElementById('portfolio');
        if (section) {
          const yOffset = -100;
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };

  return (
    <section id="portfolio" className={theme==='dark'?'dark-theme':'light-theme'}>
      <span className="skillTitle" data-aos='fade-right'>My Portfolio</span>
      <span className="skillDesc" data-aos='fade'>
        Explore my projects to see how I create visually appealing,
        user-friendly websites, intuitive apps, and inclusive, user-centered 
        interfaces that enhance digital experiences.
      </span>
      <div className='lap-container'>
        <div>
            {lapdet.slice(page * 3-3,page*3).map((lap,i)=>(
                <div key={i} className='block' data-aos='zoom-in-up'>
                    {/* <div className='slNo'>{i+1}</div> */}
                    <div className='projImg'>
                        <img  loading='eager'  src={lap.img} alt="projects" className='projects' />
                        <img loading='eager'  src={lapFrame} alt="laptopFrame" className='frame' />
                    </div>
                    <div className="content">
                        <h3>{lap.heading}</h3>
                        <p>{lap.brief}</p>
                    </div>
                    <a href={lap.url} target='_blank'><button className='projBtn'>Take a Look</button></a>
                </div>
            ))}

            {lapdet.length>0 &&  <div className='pagination'>
                <span id='backward' className={page>1?"":"pagination__disabled"}
                onClick={()=>{selectPageHandle(page-1);scrollToPortfolio()}}
                style={{color:'var(--accent-color)'}}
                >◀</span>
                {[...Array(lapdet.length/3)].map((_,i)=>{
                    return <span className={page===i+1?'pagination__selected':''}
                    onClick={()=>{selectPageHandle(i+1);scrollToPortfolio()}}
                    key={i}>{i+1}</span>
                })}
                <span id='forward' className={page<lapdet.length/3?"":"pagination__disabled"}
                style={{color:'var(--accent-color)'}}
                onClick={()=>{selectPageHandle(page+1);scrollToPortfolio()}}
                >▶</span>
            </div>
            }
        </div>

      </div>
      </section>
  )
}

export default Laptop
