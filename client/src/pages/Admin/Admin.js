import { useState, useEffect } from 'react';
import axios from 'axios'
import './Admin.css'
import { FaCheck, FaXmark } from "react-icons/fa6";const Admin = () => {
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
        .then(users => setUsers(users.data))
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
            <div className="flex flex-row justify-between items-center mt-3 p-5">
                <h1 className='font-bold text-3xl'>Users</h1>
                <button className="btn btn-primary" onClick={()=>document.getElementById('add-user-modal').showModal()}>Create verified user</button>
            </div>
            <dialog id="add-user-modal" className="modal">
                <div className='modal-box flex flex-col'>
                    <h1 className='font-bold'>Add New Users</h1>
                            <form className="form" id='userForm' onSubmit={handleSubmit}>
                                <div className="subtitle">Enter info for verified users</div>
                                    <input 
                                        id="name" className="form-control input input-bordered w-full my-2"
                                        required type="text" placeholder="Name"  value={name}
                                        onChange={(e) => {setName(e.target.value)}}/>
                                    <input 
                                        id="email" className="form-control input input-bordered w-full  my-2" 
                                        required type="text" placeholder="Email" value={email}
                                        onChange={(e) => {setEmail(e.target.value)}}/>
                                <select className="select select-bordered w-full my-2" onChange={(e) => {setPosition(e.target.value)}}>
                                    <option selected>Select position</option>
                                    <option value="member">Member</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </form>
                        <button type="submit" form='userForm' className="btn btn-neutral my-2">Create</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
                </dialog>
                {/* <div className="row">
                        <input id="email" className="form-control" type="text" placeholder="Search for name or email"/>
                </div> */}
                <div>
                    <table className='table table-zebra'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Position</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(
                                    (user,index) => {
                                        return <tr key={index}>
                                            <td><img src={user.photo} alt="Profile"/></td>
                                            <td>{user.email}</td>
                                            <td>{user.email}</td>
                                            <td>{user.position}</td>
                                            <td>{user.verified 
                                                    ? <FaCheck/>
                                                    : <FaXmark/>
                                            }</td>
                                        </tr>
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    </div>
        
     );
}
 
export default Admin;