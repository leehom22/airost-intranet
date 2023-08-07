import '../Doc.css';
import React from 'react';
import { Link } from "react-router-dom";
import * as faicon from 'react-icons/fa';
import * as aiicon from 'react-icons/ai';

const TopBar = (props)=>{
  const changeType=props.changeType;
  return(
    <div className="topbar">
    <header>
      <h2 onClick={() =>changeType("All")}>ALL</h2>
      <h2 onClick={() =>changeType("AI Resources")}>AI Resources</h2>
      <h2 onClick={() =>changeType("IOT Resources")}>IOT Resources</h2>
      <h2 onClick={() =>changeType("Web & Apps")}>Web & App Resources</h2>
      <div className="faiconfilter"><faicon.FaFilter/></div>
    </header>
  </div>
  )
}

export default TopBar;