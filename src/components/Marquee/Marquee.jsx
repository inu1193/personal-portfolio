import React from 'react'
import './Marquee.css'
import { useTheme } from '../ThemeContext'

const Marquee = () => {

    const {theme}= useTheme();

    const greetingMsg = () =>{
        const currentHours = new Date().getHours();
        if(currentHours<12){
            return 'Hey! Good Moring, '
        }
        else if( currentHours<16){
            return 'Hey! Good Afternoon, '
        }
        else if(currentHours<20){
            return 'Hey! Good Evening, '
        }
        else{
            return 'Hey! Good Night, '
        }
    }

  return (
    <div className={`marquee ${theme==='dark'?'dark-theme':'light-theme'}`}>
        <p>{greetingMsg()} Welcome to my portfolio! Explore my projects, skills, and Achievements.</p>
    </div>
  )
}

export default Marquee;
