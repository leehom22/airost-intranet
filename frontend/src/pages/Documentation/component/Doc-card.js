import '../style/Doc-card.css';
import React from 'react';
import { Link } from "react-router-dom";

const DocCard = (prop) => {
  const type = prop.articleType;
  const documentationData = prop.docs;
  const docCard= (type==='All') ? documentationData : documentationData.filter((doc)=>doc.type===type) ;
  const getFontSize = (textLength) => {
    var textLength =  (textLength > 50) ? textLength*0.17 :
                      (textLength > 40) ? textLength*0.32 :
                      textLength=15;
    return textLength;
  };

  return ( 
    <div className="articleContainer">  
    {docCard?.map((doc) => {
      return (
      <div className='articleList'>
      <div key={doc._id} className='articleCard'>
      <Link to={`/doc/${doc._id}`} className='articleLink'>
        <img src={doc.image} alt='article-img' className='articleImage'></img>
        <div className="article">
        <div className='articleDetail'>
          <h1>{doc.author} • </h1>
          <h1>{doc.date} • </h1>
          <h1>{doc.type}</h1>
        </div>
          <div className='articleTitle' style={{fontSize:`${getFontSize(doc.title.length)}px`}}><h2> {doc.title}</h2></div>
          <div className='articleDescription'><p>{doc.description} </p></div>
        </div>
        </Link>
      </div>
    </div>
    )
    })}
    </div>
   );
}
 
export default DocCard;

