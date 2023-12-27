import { useState, useEffect } from 'react';
import axios from 'axios'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css'
import Modal from 'react-bootstrap/Modal';
const Admin = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [position, setPosition] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers]  = useState([])
    const [createSuccess, setCreateSuccess] = useState(false);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async => {
        axios.get('http://localhost:4000/admin/users')
        .then(users => console.log(users.data))
        .catch(err => console.log(err))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
  
        const response = await axios.post('http://localhost:4000/admin/users/verified', {
            name : name,
            email : email,
            position : position,
        })
        
        if (response.data.createStatus == "success"){
            setCreateSuccess(true);
            setName("");
            setEmail("");
            setPosition("");
        }
    }

    
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    return (
    <div className='admin-page container'>
        <div className="col">
            <div className="row justify-content-between mt-3">
                <h1 className="col-2">Users</h1>
                <div className="col-2 p-0 text-center">
                    <button className="btn btn-success float-end" type="button" data-toggle="modal" data-target="#exampleModal" onClick={handleShowModal}>
                        Add new users
                    </button>
                </div>
            </div>
                <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Users</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                            <form className="form" id='userForm' onSubmit={handleSubmit}>
                                <div className="subtitle">Enter info for verified users</div>

                                <div className="form-floating mb-3">
                                    <input 
                                        id="name" className="form-control" required
                                        type="text" placeholder=""  value={name}
                                        onChange={(e) => {setName(e.target.value)}}/>
                                    <label htmlFor="name" className='form-label'>Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input 
                                            id="email" className="form-control" required
                                            type="text" placeholder="" value={email}
                                            onChange={(e) => {setEmail(e.target.value)}}/>
                                    <label htmlFor="email" className='form-label'>Email</label>
                                </div>
                                <select className='form-select mb-3'onChange={(e) => {setPosition(e.target.value)}}>
                                    <option selected>Select position</option>
                                    <option value="member">Member</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" form='userForm' className="btn btn-success">Create</button>
                    </Modal.Footer>
                </Modal>
                <div className="row">
                        <input id="email" className="form-control" type="text" placeholder="Search for name or email"/>
                </div>
        </div>
    </div>
        
     );
}
 
export default Admin;