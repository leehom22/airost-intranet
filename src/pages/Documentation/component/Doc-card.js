import '../Doc.css';
import React from 'react';
import { Link } from "react-router-dom";
import {documentationData} from '../Doc-content';

const DocCard = (prop) => {
  const type = prop.articleType;
  const docCard= (type==='All') ?  documentationData :documentationData.filter((doc)=>doc.type===type) ;
  return ( 
    <div className="articleContainer">  
    {docCard
      .map((doc) => {
      return (<div className='articleList'>
      <div key={doc.id} className='articleCard'>
        <img src={doc.image} alt='article-img' className='articleImage'></img>
        <div className="article">
        <div className='articleDetail'>
          <h1>{doc.author} • </h1>
          <h1>{doc.date} • </h1>
          <h1>{doc.type}</h1>
        </div>
          <h2> {doc.title}</h2>
          <p>{doc.description} </p>
        </div>
      </div>
    </div>
    )})}
    </div>
   );
}
 
export default DocCard;