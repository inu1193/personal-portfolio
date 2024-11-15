import React,{useState,useContext,createContext} from 'react'
import useLocalStorage from 'use-local-storage'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
const preference = window.matchMedia("(prefers-color-schema: dark)").matches;
const [theme, setTheme] =useLocalStorage( 'isdark',preference);


const  toggleTheme = ()=>{
    setTheme((prevTheme)=>(prevTheme==='light'?'dark':'light'));
  
};

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = ()=>useContext(ThemeContext);
