import React from 'react';
import './whatGPT3.css';
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className='whatgpt3 section_margin' id='wgpt3'>
        <div className="whatgpt3-feature">
          <Feature title="What is GPT3" text="GPT-3, which stands for Generative Pre-trained Transformer 3, is a remarkable language model developed by OpenAI. Let me break it down for you: It can create human-like text, whether its writing essays, poems, or even code." />
        </div>
        <div className="whatgpt3-heading">
          <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
          <p>Explore The Library</p>
        </div>
        <div className="whatgpt3-container">
          <Feature title="Chatboats" text="GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small"/>
          <Feature title="Knowledgebase" text="Applications and industries. To date, over 300 apps are using GPT-3 across varying categories and industries, from productivity and education to creativity and games"/>
          <Feature title="Education" text="Generative Pre-trained Transformer 3 (GPT-3) is a large language model released by OpenAI in 2020. Like its predecessor GPT-2, it is a decoder-only transformer model of deep neural"/>
        </div>
    </div>
  )
}

export default WhatGPT3