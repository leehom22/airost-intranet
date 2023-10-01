import "./Dashboard.css"
import useAuth from '../../hooks/useAuth';


function Dashboard() {
  const user = useAuth();
  return (
    <div className='dashboard'>
      <div className="header-container">
        <div className="background"><img src="profile_bg.png" alt="Profile background" /></div>
  
        <div className="profile-section">
          <img src={user.photo} alt="Profile" className='profile-pic' referrerPolicy="no-referrer"/>
          <div className="about-section">
            <div className="about-header">
              <div className="name">{user.name}</div>
              <div className="profile-description">{user.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;