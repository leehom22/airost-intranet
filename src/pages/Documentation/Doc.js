import React from 'react';
import { Link } from "react-router-dom";
import {documentationData} from './Doc-content';
import DocCard from './Doc-card';
import { useState } from 'react';
import './Doc.css';
import * as faicon from 'react-icons/fa';
import * as aiicon from 'react-icons/ai';

const Doc = () => {
  const [articleType,setArticleType]=useState('All');

  const changeTypeAI = (e)=>{
    setArticleType('Ai Resources');
    console.log('Change to Ai Resources');
  }

  const changeTypeIOT = (e)=>{
    setArticleType('IOT Resources');
    console.log('Change to IOT Resources');
  }

  const changeTypeWeb = (e)=>{
    setArticleType('Web & Apps');
    console.log('Change to Web&Apps Resources');
  }

  const changeTypeAll = (e)=>{
    setArticleType('All');
    console.log('Change to All Resources');
  }


  return ( 
    //Top Bar
    <div className='doc'>
      
      <div className="topbar">
        <header>
          <h2 >
           ALL
          </h2>
          <h2>
          AI Resources
          </h2>
          <h2>
          IOT Resources
          </h2>
          <h2>
          Web & App Resources
          </h2>
          <div className="faiconfilter"><faicon.FaFilter/></div>
        </header>
      </div>
    
      <div className="articleContainer">
      {documentationData.map((doc) => {
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
    </div>
   );
}
 
export default Doc;