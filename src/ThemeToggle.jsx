import React from 'react'
import { useGlobalContext } from './Context'
import {FaSun,FaMoon} from "react-icons/fa";

export const ThemeToggle = () => {
    const {isDarkTheme,toggleDarkTheme} = useGlobalContext();
  return (
    <section>
        <button className='dark-toggle' onClick={toggleDarkTheme}>
            {isDarkTheme ?<FaMoon className='toggle-icon' style={{marginTop:'10px', marginRight:'10px'}}></FaMoon> : <FaSun className='toggle-icon' style={{marginTop:'10px', marginRight:'10px'}}></FaSun>}
        </button>
    </section>
  )
}
