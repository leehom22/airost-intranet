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
          <button className="edit" data-toggle="modal" data-target="#exampleModal" onClick={handleShowModal}>Edit Profile</button>
          <button className=""></button>
          <button className=""></button>

        </div>
      </div>
      {/* <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                            <form className="form" id='userForm' onSubmit={handleSubmit}>
                                <div className="subtitle">Profile Info</div>

                                <div className="form-floating mb-3">
                                    <input 
                                        id="name" className="form-control" required
                                        type="text" placeholder={user.description}  value={description}
                                        onChange={(e) => {setDescription(e.target.value)}}/>
                                    <label htmlFor="name" className='form-label'>Description</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input 
                                        id="name" className="form-control" required
                                        type="text" placeholder={user.year}  value={year}
                                        onChange={(e) => {setYear(e.target.value)}}/>
                                    <label htmlFor="name" className='form-label'>Year</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input 
                                        id="name" className="form-control" required
                                        type="text" placeholder={user.course}  value={course}
                                        onChange={(e) => {setCourse(e.target.value)}}/>
                                    <label htmlFor="name" className='form-label'>Course</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input 
                                        id="name" className="form-control" required
                                        type="text" placeholder={user.phonenum}  value={phonenum}
                                        onChange={(e) => {setPhonenum(e.target.value)}}/>
                                    <label htmlFor="name" className='form-label'>Phone Number</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input 
                                        id="name" className="form-control" required
                                        type="text" placeholder={user.instagram}  value={instagram}
                                        onChange={(e) => {setInstagram(e.target.value)}}/>
                                    <label htmlFor="name" className='form-label'>Instagram Username</label>
                                </div>
                            </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" form='userForm' className="btn btn-success">Update</button>
                    </Modal.Footer>
                </Modal> */}
      
      
    </div>
  );
}

export default Dashboard;