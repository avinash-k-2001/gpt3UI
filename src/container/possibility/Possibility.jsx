import React from 'react';
import './possibility.css';
import PossibilityImage from '../../assets/vr.png'

const Possibility = () => {
  return (
    <div className='possibility-sec section_padding' id='possibility'>
      <div className="possibility-img">
        <img src={PossibilityImage} />
      </div>
      <div className="possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility