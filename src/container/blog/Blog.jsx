import React from 'react';
import './blog.css';
import Artical  from '../../components/article/Artical';
import blog1 from '../../assets/blog1.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';
import blog4 from '../../assets/blog4.jpg';
import blog5 from '../../assets/blog5.jpg';


const Blog = () => {
  return (
    <div className='blog section_padding' id='blog'>
      <div className="blog-heading">
        <h2 className='gradient__text'>A lot is happening We are Blogging about it.</h2>
      </div>
      <div className="blog-container">
         <div className="groupA">
            <Artical imgurl={blog1} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
         </div>
         <div className="groupB">
            <Artical imgurl={blog2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Artical imgurl={blog3} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Artical imgurl={blog4} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Artical imgurl={blog5} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/> 
         </div>
      </div>
    </div>
  )
}

export default Blog