import React from 'react';
import './artical.css';

const Artical = ({ imgurl, date, title }) => {
  return (
    <div className='artical'>
       <div className="artical-img">
         <img src={imgurl} />
       </div>
       <div className="article-content">
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
          </div>
          <p>Read Full Article</p>
       </div>
    </div>
  )
}

export default Artical