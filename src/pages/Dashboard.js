import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className="container">
        <img src="profile_pic.jpeg" alt="Profile" className='profile-pic'/>
        <div className="background"><img src="profile_bg.png" alt="Profile background" /></div>
        <div className="aboutSection"></div>
      </div>
    </div>
  );
}

export default Dashboard;