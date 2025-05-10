import "./Dashboard.css"
import useAuth from '../../hooks/useAuth';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { useState, useEffect } from 'react';

function Dashboard() {
  const user = useAuth();

  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState(user.description);
  const [year, setYear] = useState(user.year);
  const [course, setCourse] = useState(user.course);
  const [phonenum, setPhonenum] = useState(user.phonenum);
  const [instagram, setInstagram] = useState(user.instagram);
    
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => {
    setDescription(user.description);
    setYear(user.year);
    setCourse(user.course);
    setPhonenum(user.phonenum);
    setInstagram(user.instagram);
    setShowModal(true);
  }

  const handleSubmit = async (e) => {
    
    const response = await axios.patch('/user/' + user._id, {
      description: description,
      year: year,
      course: course,
      phonenum: phonenum,
      instagram: instagram,
    })
  }

  return (
    <div className='dashboard'>
      <div className="header-container">
        <div className="background"><img src="profile_bg.png" alt="Profile background" /></div>
        <div className="profile-section">
          <img src={user.photo} alt="Profile" className='profile-pic' referrerPolicy="no-referrer"/>
          <div className="about-section">
          <div className="name">{user.name}</div>
          <div className="about-header">
            <div className="left-section">
              <div className="profile-description">{user.description}</div>
              <div className="year-course">{user.year + " year " + user.course + " student"}</div>
            </div>
            <div className="right-section">
              <div className="phonenum">Phone no: {user.phonenum}</div>
              <div className="profile-instagram">Instagram: {user.instagram}</div>
            </div>
          </div>
            
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="main">
          <div className="information"></div>
        < div className="events"></div>
        </div>
      </div>
      <div className="buttons-container">
        <div className="buttons">
          {/* <button className="edit" data-toggle="modal" data-target="#exampleModal" onClick={handleShowModal}>Edit Profile</button> */}
          <button className="btn btn-primary" onClick={()=>document.getElementById('my_modal_2').showModal()}>Edit Profile</button>
          <button className=""></button>
          <button className=""></button>

        </div>
      </div>
      <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <form className="form grid grid-cols-1 gap-2" id='userForm' onSubmit={handleSubmit}>
              <div className="subtitle">Profile Info</div>
                <label class="w-full max-w-xs">
                    <div class="label">
                      <span class="label-text">Description</span>
                    </div>
                    <input 
                        id="name" className="input input-bordered w-full max-w-xs" required
                        type="text" placeholder={user.description}  value={description}
                        onChange={(e) => {setDescription(e.target.value)}}/>
                </label>
                <label class="w-full max-w-xs">
                    <div class="label">
                      <span class="label-text">Year</span>
                    </div>
                    <input 
                        id="name" className="input input-bordered w-full max-w-xs" required
                        type="text" placeholder={user.year}  value={year}
                        onChange={(e) => {setYear(e.target.value)}}/>
                </label>
                <label class="w-full max-w-xs">
                    <div class="label">
                      <span class="label-text">Course</span>
                    </div>
                    <input 
                        id="name" className="input input-bordered w-full max-w-xs" required
                        type="text" placeholder={user.course}  value={course}
                        onChange={(e) => {setCourse(e.target.value)}}/>
                </label>
                <label class="w-full max-w-xs">
                    <div class="label">
                      <span class="label-text">Phone Number</span>
                    </div>
                    <input 
                        id="name" className="input input-bordered w-full max-w-xs" required
                        type="text" placeholder={user.phonenum}  value={phonenum}
                        onChange={(e) => {setPhonenum(e.target.value)}}/>
                </label>
                <label class="w-full max-w-xs">
                    <div class="label">
                      <span class="label-text">Instagram</span>
                    </div>
                    <input 
                        id="name" className="input input-bordered w-full max-w-xs" required
                        type="text" placeholder={user.instagram}  value={instagram}
                        onChange={(e) => {setInstagram(e.target.value)}}/>
                </label>
              </form>
              <button type="submit" form='userForm' className="btn btn-neutral">Update</button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
      </dialog>
      
    </div>
  );
}

export default Dashboard;