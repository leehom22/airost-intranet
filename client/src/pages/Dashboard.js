import React from 'react';
import './Dashboard.css';

function Dashboard({user}) {
  return (
    <div className='dashboard'>
      <div className="header-container">
        <div className="background"><img src="profile_bg.png" alt="Profile background" /></div>
  
        <div className="profile-section">
          <img src={user.photo} alt="Profile" className='profile-pic' referrerPolicy="no-referrer"/>
          <div className="about-section">
            <div className="about-header">
              {user.name}
              <div className="profile-description">{user.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;