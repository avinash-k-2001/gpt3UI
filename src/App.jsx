import React from 'react';
import './App.css';

import Artical from './components/article/Artical';
import Brand from './components/brand/Brand';
import CTA from './components/cta/CTA';
import Feature from './components/feature/Feature';
import Navbar from './components/navbar/Navbar';

import Features from './container/features/features';
import Blog from './container/blog/Blog';
import Footer from './container/footer/Footer';
import Header from './container/header/Header';
import Possibility from './container/possibility/Possibility';
import WhatGPT3 from './container/whatGPT3/WhatGPT3';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App