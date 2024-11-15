import React from 'react';
import Typed from 'typed.js';
import './Proin.css'

const Proin = () => {
 // Create reference to store the DOM element containing the animation
 const el = React.useRef(null);

 React.useEffect(() => {
   const typed = new Typed(el.current, {
     strings: ['HTML', 'CSS','JavaScript','React JS','Python','Django','Express JS','Node JS','MongoDB','Postgres','MS Office','MySQL','Bootstrap','Tailwind CSS' , 'Unity','Adobe Photoshop','Next JS','BotPress'],
     typeSpeed: 150,
     backDelay:1000,
     backSpeed:110,
     loop:true
   });

   return () => {
     // Destroy Typed instance during cleanup to stop animation
     typed.destroy();
   };
 }, []);

  return (
    <span className='introProHead'>
      Proficient In: <span className="introPro" ref={el}></span>
    </span>
  )
}

export default Proin;
