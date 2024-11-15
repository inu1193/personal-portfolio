import React, { useEffect,useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import port1 from "../../assets/google.jpg";
import port2 from "../../assets/google2.jpg";
import port3 from "../../assets/google3.jpg";
import port4 from "../../assets/growcify.jpg";
import port5 from "../../assets/vtu.jpg";
import port6 from "../../assets/free.jpg";
import port7 from "../../assets/tute.jpg";
import port8 from "../../assets/zeta.jpg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { BrowserRouter as Router, Link } from "react-router-dom";import './Scroller.css'
import { useTheme } from "../ThemeContext";

export const Scroller = () => {
  const{theme} = useTheme();
    useEffect(() => {
        AOS.init({
          once: true,
          mirror: false,
        });
      }, []);

      

  return (
   <section id="ach" className={theme==='dark'?'dark-theme':'light-theme'}>
      <span className="skillTitle" data-aos="fade-right">My Achievements</span>
    <span className="skillDesc">
    Empowered by a collection of certifications, achievements, and enriching
        internships, my portfolio reflects a commitment to growth and impactful
        contributions.   <span className="color">Hover over the certificate to read, or click to view it.</span>
    </span>
      <div className="scroller">
        <div className="scroller_inner">
        
        <span className="achImg" >
      <Router>
            <Link
                  to="https://www.coursera.org/account/accomplishments/verify/JMKLLFE8NVA3?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port1} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://coursera.org/share/09d80cc31c61dc9a12621cf996303aee"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port2} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://www.coursera.org/account/accomplishments/verify/34FVF9CCUN8K?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port3} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://drive.google.com/file/d/108WHLBnkz9G5CwZqLXWdavfGkkjv0_oM/view?usp=drivesdk"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port4} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://drive.google.com/file/d/1XvmT5SFMZzdCl81u68-_M6wUhLnA9wc-/view?usp=drivesdk"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port5} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://freecodecamp.org/certification/fcc57b44fb5-c98b-4387-933b-35fcbf2c2013/responsive-web-design"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port6} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://drive.google.com/file/d/1_G5D0fCWdl_m8kIM2xBkpwy7U9vSSii8/view?usp=drivesdk"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port7} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://drive.google.com/file/d/1u5Pkh-6RAhkNt3s0cVyWlNzAqtq8-4vb/view?usp=drivesdk"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port8} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
        <span className="achImg" >
      <Router>
            <Link
                  to="https://www.coursera.org/account/accomplishments/verify/JMKLLFE8NVA3?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port1} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://coursera.org/share/09d80cc31c61dc9a12621cf996303aee"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port2} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://www.coursera.org/account/accomplishments/verify/34FVF9CCUN8K?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port3} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://drive.google.com/file/d/108WHLBnkz9G5CwZqLXWdavfGkkjv0_oM/view?usp=drivesdk"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port4} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://drive.google.com/file/d/1XvmT5SFMZzdCl81u68-_M6wUhLnA9wc-/view?usp=drivesdk"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port5} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://freecodecamp.org/certification/fcc57b44fb5-c98b-4387-933b-35fcbf2c2013/responsive-web-design"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port6} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://drive.google.com/file/d/1_G5D0fCWdl_m8kIM2xBkpwy7U9vSSii8/view?usp=drivesdk"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port7} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
      <span className="achImg" >
      <Router>
            <Link
                  to="https://drive.google.com/file/d/1u5Pkh-6RAhkNt3s0cVyWlNzAqtq8-4vb/view?usp=drivesdk"
                  target="_blank"
                >
                 <Tippy content="view">
                    <img src={port8} className="achImgs" alt="achfolio 1" />
                 </Tippy>
            </Link>
        </Router>
          
        </span>
        </div>
    </div>
   </section>
  )
}

export default Scroller
