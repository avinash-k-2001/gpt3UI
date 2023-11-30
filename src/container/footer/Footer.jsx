import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer section_padding'>
      <div className="footer-heading">
        <h2 className='gradient__text'>Do you want to step in to the future before others</h2>
      </div>
      <div className="footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="footer-links">
         <div className="footer-logo">
           <h3>GPT-3</h3>
           <p> Chreterchwood K12 182 DK Alknjkcb, all Right Reserved</p>
         </div>
         <div className="footer-links-div">
           <h4>Links</h4>
           <p>Overons</p>
           <p>Social Media</p>
           <p>Counters</p>
           <p>Contact</p>
         </div>
         <div className="footer-links-div">
           <h4>Company</h4>
           <p>Term & Conditions</p>
           <p>Privacy Policy</p>
           <p>Contact</p>
         </div>
         <div className="footer-links-div">
           <h4>Get in touch</h4>
           <p>Crechterwood K12 182 DK Alknjkcb</p>
           <p>085-132567</p>
           <p>info@payme.net</p>
           <p>Contact</p>
         </div>
      </div>
      <div className="footer-copyright">
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer