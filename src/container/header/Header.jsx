import React from 'react';
import './header.css';
import aiface from '../../assets/headerimg.jpeg'

const Header = () => {
  return (
    <div className='header section_padding' id='home'>
      <div className='header-content'>
        <h1 className='gradient__text'>Let's Build Something Amazing With GPT-3 OpenAI</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est suscipit voluptate nobis aspernatur nihil, eligendi consectetur sequi natus iure, ipsa delectus recusandae temporibus tempore magni ex sed excepturi quos vel.</p>
        <div className='header-input'>
          <input type="email" placeholder='Enter your email' />
          <button type='button'>Get Started</button>
        </div>
      </div>
      <div className="header-img">
        <img src={aiface} />
      </div>
    </div>
  )
}

export default Header