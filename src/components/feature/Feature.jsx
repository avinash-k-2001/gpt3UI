import React from 'react';
import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className='features-cont'>
        <div className="features-title">
          <div/>
          <h2>{title}</h2>
        </div>
        <div className="feature-text">
          <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature