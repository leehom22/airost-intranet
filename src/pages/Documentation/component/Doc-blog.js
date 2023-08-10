import '../style/Doc-card.css';
import React from 'react';
import { Link } from "react-router-dom";
import {documentationData} from '../Doc-content';
import { useParams } from 'react-router-dom';

const DocBlog = () => {
  const { id } = useParams();
  return(
    <div className="blog">
      <p>hi</p>
    </div>
  )
}

export default DocBlog;