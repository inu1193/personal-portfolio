import './Intro.css'
import bg from '../../assets/pfp-white.png'
import dbg from '../../assets/pfp-white.png'
import {Link} from 'react-scroll'
import cv from '../../assets/Resumecv.png'
import Proin from '../ProIn/Proin'
import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from '../../assets/Syed_Inayath_CV.pdf' 
import { useTheme } from '../ThemeContext'

const Intro = () => {

const {theme} = useTheme();

  useEffect(() => {
    AOS.init({
      once:true,
      mirror:false
    });
  }, [])

  let url =`https://drive.google.com/file/d/1E5Id_ZLGuZUmFpzS4qyj7UWgJLCWRfLm/view?usp=drive_link`
  return (
    <section id="intro" className={theme==='dark'?'dark-theme':'light-theme'}>
        <div className="introContent" data-aos='fade-right'>
            <span className="hello">👋 Hello! I am </span><br />
            <span className="introName">Syed Inayath</span><br />
            <span className="introWork">Full Stack Developer</span><br />
            <Proin/>
            <button className=' introBtn'><a href={url} download='Syed_Inayath_CV.pdf' target='_blank' className='introLink' >
            <img src={cv} alt="cv icon"  />Download CV</a></button>
        </div>
        <div className="bg">
            {theme==='dark'?<img src={dbg} alt="Person Image" className='bg' data-aos='fade-left' loading='eager'  />:<img src={bg} alt="Person Image" className='bg' data-aos='fade-left' loading='eager' />}
        </div>
    </section>
  )
}

export default Intro
