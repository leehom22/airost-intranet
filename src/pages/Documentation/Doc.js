import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import DocCard from './component/Doc-card';
import TopBar from './component/TopBar';
import { useState } from 'react';
import './style/global.css';

const Doc = () => {
  const [articleType, setArticleType] = useState('All');

  const changeType = (newType) => {
    setArticleType(newType);
    console.log(`Change to ${articleType}`);
  };

  return ( 
    <div className='doc'>
     <TopBar changeType={changeType}/>
     <DocCard articleType={articleType}/>
    </div>
   );
}
 
export default Doc;