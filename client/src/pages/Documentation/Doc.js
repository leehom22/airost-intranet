import React, { useEffect } from 'react';
import { Link, Route, Router } from "react-router-dom";
import DocCard from './component/Doc-card';
import TopBar from './component/TopBar';
import { useState} from 'react';
import './style/global.css';

const Doc = () => {
  const [articleType, setArticleType] = useState('All');
  const changeType = (newType) => {
    setArticleType(newType);
    console.log(`Change to ${articleType}`);
  };

  //Fetch Data from backend
  const [docs, setDocs] = useState(null)

  useEffect(() => {
    const fetchDocs = async () => {
      const response = await fetch('/airost/doc')
      const json = await response.json()

      if (response.ok) {
        setDocs(json)
      }
    }

    fetchDocs()
  }, [])

  return ( 
    <div className='doc'>
      <TopBar changeType={changeType}/>
      <DocCard articleType={articleType} docs={docs}/>
    </div>
   );
}
 
export default Doc;