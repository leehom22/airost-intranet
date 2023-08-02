import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className="header-container">
        <div className="background"><img src="profile_bg.png" alt="Profile background" /></div>
  
        <div className="profile-section">
          <img src="profile_pic.jpeg" alt="Profile" className='profile-pic'/>
          <div className="about-section">
            <div className="about-header">About
              <div className="profile-description">Passionate about Machine Learning and Data Science! 3rd year Software Engineering student</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;