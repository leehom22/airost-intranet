import './Doc.css';
import React from 'react';
import { Link } from "react-router-dom";
import {documentationData} from './Doc-content';

const DocCard = ({id,image,title,author,type,date,description}) => {
  return ( 
    <div className='articleList'>
      
      <div key={id} className='articleCard'>
        <img src={image} alt='article-img' className='articleImage'></img>
        <div className='articleDetail'>
          <p>Check</p>
          <h1>{author} • </h1>
          <h1>{date} • </h1>
          <h1>{type} • </h1>
        </div>
        <h2>
          {title}
        </h2>
        <p>
          {description}
        </p>
      </div>
    </div>
   );
}
 
export default DocCard;