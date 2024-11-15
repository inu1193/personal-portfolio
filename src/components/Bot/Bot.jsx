import React,{useEffect} from 'react'
import './Bot.css'


const Bot = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      return (
        <div id="botpress-web-chat"></div>
      );
    
}

export default Bot;

