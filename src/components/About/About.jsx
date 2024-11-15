import React, { useEffect } from "react";
import "./About.css";
import webImg from "../../assets/uiux(1).jpg";
import appImg from "../../assets/port1.webm";
import appImg1 from "../../assets/uiux(2).jpg";
import uxDesign from "../../assets/3ux.webm";
import appDesign from "../../assets/AppDesigning.webm";
import uiImg from "../../assets/uiux(3).jpg";
import fullStackImg from '../../assets/full stack.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useTheme } from "../ThemeContext";


const About = () => {
  const {theme} = useTheme();
  useEffect(() => {
    AOS.init({
      once:true,
      mirror:false
    });
  }, [])
  return (
    <section id="skills" className={theme==='dark'?'dark-theme':'light-theme'}>
      <span className="skillTitle" data-aos='fade-right'>What I do</span>
      <span className="skillDesc" data-aos='fade'>
      I am an aspiring Full Stack Developer with a passion for creating accessible and inclusive websites. Proficient in <span>HTML, CSS, JavaScript, React.js, Express.js, Node.js, Python, Django</span>, and skilled in tools like <span>Unity and Adobe Photoshop</span>, I am committed to equity-focused design. I strive to build engaging, universally accessible digital experiences that seamlessly blend technology with creative vision.
      </span>
      <div className="skillCards">
        <div className="skillCard" data-aos='zoom-in'>
            {/* <img src={appImg1} alt="Web designer" className="skillImg" /> */}
            <video preload="auto"  className="skillImg" autoPlay muted loop playsInline poster={appImg1}  alt='Web_development_gif' >
              <source src={appImg} type="video/mp4" />
            </video>
            <div className="skillbarText">
                <h2>Website Designing</h2>
                <p>I create visually appealing, user-friendly websites that enhance online presence.</p>
            </div>
        </div>
        <div className="skillCard" data-aos='zoom-in'>
            {/* <img src={uiImg} alt="App designer" className="skillImg" /> */}
            <video preload="auto"  className="skillImg" autoPlay muted loop playsInline poster={uiImg}  alt='Web_development_gif' >
              <source src={appDesign} type="video/mp4" />
            </video>
            <div className="skillbarText">
                <h2>App Designing</h2>
                <p> I design intuitive, engaging apps that enhance user experience.</p>
            </div>
        </div>
        <div className="skillCard" data-aos='zoom-in'>
            {/* <img loading='lazy' src={webImg} alt="UI/UX designer" className="skillImg" /> */}
            <video preload="auto"  className="skillImg" poster={fullStackImg}  alt='Web_development_gif' >
            <source src={uxDesign} type="video/mp4" />
            </video>
            <div className="skillbarText">
                <h2>Full Stack Solutions</h2>
                <p>Combining frontend and backend skills to build end-to-end web applications, ensuring seamless functionality, performance, and user experience.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
