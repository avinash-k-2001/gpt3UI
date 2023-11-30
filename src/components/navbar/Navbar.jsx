import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';


const Menu = () => (
    <>
        <a href="#home">Home</a>
        <a href="#wgpt3">What is GPT?</a>
        <a href="#possibility">Open AI</a>
        <a href="#features">Case Studies</a>
        <a href="#blog">Library</a> 
    </>
)

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='logo'>
          <span>GPT-3</span>
        </div>
        <div className='links'>
           <Menu/>
        </div>
        <div className='sign'>
            <p>Sign in</p>
            <button type='button'>Sign up</button>
        </div>
        <div className='navbar-menu'>
            { toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
             : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
             }
             {
              toggleMenu && (
                <div className='toggle-menu scale-up-center'>
                    <div className='menu-links'>
                     <Menu/>
                     <div className='menu-sign'>
                       <p>Sign in</p>
                       <button type='button'>Sign up</button> 
                     </div>
                    </div>
                </div>
              ) }
        </div>
      </div>
    </div>
  )
}

export default Navbar