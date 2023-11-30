import React from 'react';
import './brand.css';
import comp1 from'../../assets/comp1.png';
import comp2 from'../../assets/comp2.png';
import comp3 from'../../assets/comp3.png';
import comp4 from'../../assets/comp4.png';
import comp5 from'../../assets/comp5.png';


const Brand = () => {
  return (
    <div className='brands section_padding' id='brand'>
      <div>
        <img src={comp1}  />
      </div>
      <div>
        <img src={comp2}  />
      </div>
      <div>
        <img src={comp3}  />
      </div>
      <div>
        <img src={comp4}  />
      </div>
      <div>
        <img src={comp5}  />
      </div>
    </div>
  )
}

export default Brand