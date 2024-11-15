import React, { useEffect,useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import './Slider.css'
import {data} from './index.js'
import woodenBg from '../../assets/woodenBg.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import {Autoplay} from 'swiper/modules'
import 'swiper/css/autoplay'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const SliderA = () => {

    const{theme} = useTheme();
    useEffect(() => {
        AOS.init({
          once: true,
          mirror: false,
        });
      }, []);


      
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }


  return (
    <section id="slid" className={theme==='dark'?'dark-theme':'light-theme'}>
    <span className="skillTitle" data-aos='fade-right'>My Achievements</span>
    <span className="skillDesc" data-aos='fade'>
    Empowered by a collection of certifications, achievements, and enriching
        internships, my portfolio reflects a commitment to growth and impactful
        contributions.<span className="color"> Click to verify.</span>
    </span>


    <main className="scroller">
    <swiper-container   modules={[Autoplay]}
    style={
      {
      "--swiper-navigation-color": "var(--background-color)", 
      "--swiper-pagination-color": 'var(--accent-color)',
       
      }
  } 

     breakpoints={
      JSON.stringify({
          
          300:{
              slidesPerView: 1,
              spaceBetween: 20,
          },
          640:{
              slidesPerView: 1,
              spaceBetween: 20,
          },

          768: {
              slidesPerView: 2,
              spaceBetween: 40,
          },

          1024: {
              slidesPerView: 2,
              spaceBetween: 50,
          }
      })
  }space-between="20" pagination-clickable="true" mousewheel-invert="true"  loop={true} autoplay={{delay:5000 ,disableOnInteraction:false,}}  speed={400}  >

            {data.map((d,i)=>(
              <swiper-slide key={i} >
              <Router>
              <Link rel="preload"
                    to={d.url}
                    target="_blank"
                  >
                     <span className="head1">{d.heading}</span>
                     <LazyLoadImage effect="blur" loading="eager" src={d.img} className="sliderImg" alt="sliderImgs" />
              </Link>
          </Router>
              </swiper-slide>
            ))}

        {/* <swiper-slide >
              <Router>
              <Link
                    to="https://www.coursera.org/account/accomplishments/verify/JMKLLFE8NVA3?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                    target="_blank"
                  >
                     <img src={port1} className="sliderImg" alt="sliderImgs" />
              </Link>
          </Router>
              </swiper-slide>   
        <swiper-slide >
              <Router>
              <Link
                    to="https://www.coursera.org/account/accomplishments/verify/JMKLLFE8NVA3?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                    target="_blank"
                  >
                     <img src={port1} className="sliderImg" alt="sliderImgs" />
              </Link>
          </Router>
              </swiper-slide>   
        <swiper-slide >
              <Router>
              <Link
                    to="https://www.coursera.org/account/accomplishments/verify/JMKLLFE8NVA3?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                    target="_blank"
                  >
                     <img src={port1} className="sliderImg" alt="sliderImgs" />
              </Link>
          </Router>
              </swiper-slide>   
        <swiper-slide >
              <Router>
              <Link
                    to="https://www.coursera.org/account/accomplishments/verify/JMKLLFE8NVA3?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                    target="_blank"
                  >
                     <img src={port1} className="sliderImg" alt="sliderImgs" />
              </Link>
          </Router>
              </swiper-slide>   
        <swiper-slide >
              <Router>
              <Link
                    to="https://www.coursera.org/account/accomplishments/verify/JMKLLFE8NVA3?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                    target="_blank"
                  >
                     <img src={port1} className="sliderImg" alt="sliderImgs" />
              </Link>
          </Router>
              </swiper-slide>   
        <swiper-slide >
              <Router>
              <Link
                    to="https://www.coursera.org/account/accomplishments/verify/JMKLLFE8NVA3?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                    target="_blank"
                  >
                     <img src={port1} className="sliderImg" alt="sliderImgs" />
              </Link>
          </Router>
              </swiper-slide>    */}
        </swiper-container>
    </main>

    </section>
  )
}



export default SliderA
