import { useState } from 'react';
import Axios from 'axios'
import Select from 'react-select';
import './Admin.css'

const Admin = () => {
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [position, setPosition] = useState(" ");

    const [createSuccess, setCreateSuccess] = useState(false);

    const options = [
        { value: 'member', label: 'member' },
        { value: 'admin', label: 'admin' },
      ]
      
    const handleSubmit = async (e) => {
        e.preventDefault();
  
        const response = await Axios.post('http://localhost:4000/admin/users/verified', {
            name : name,
            email : email,
            position : position,
        })
        console.log(response);
        console.log(response.data.createStatus);
        
        if (response.data.createStatus == "success"){
            setCreateSuccess(true);
            setName(" ");
            setEmail(" ");
            setPosition(" ");
        }
    }
    return ( 
        <div className='admin-page'>
            <center><h1>Admin page</h1></center>
            <form className="form" onSubmit={handleSubmit}>
                <div className="title">Verified Users</div>
                    <div className="subtitle">Enter info for verified users</div>
                    <div className="input-container ic1">
                        <input 
                            id="name" className="input" required
                            type="text" placeholder=" "  value={name}
                            onChange={(e) => {setName(e.target.value)}}/>
                        <div className="cut"></div>
                        <label for="name" className="placeholder">Name</label>
                    </div>
                    <div className="input-container ic2">
                        <input 
                            id="email" className="input" required
                            type="text" placeholder=" " value={email}
                            onChange={(e) => {setEmail(e.target.value)}}/>
                        <div className="cut"></div>
                        <label for="email" className="placeholder">Email</label>
                    </div>
                    <div className="input-container ic2">
                    {/* <Select 
                    styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          backgroundColor: '#303245',
                          borderColor: state.isFocused ? 'white' : 'black',
                          text
                        }),
                      }} options={options} onChange={(e) => {setPosition(e.value)}} /> */}
                      <Select options={options} onChange={(e) => {setPosition(e.value)}}/>
                    </div>
                 <button type="submit" className="submit">Create</button>
            </form>
        </div>
     );
}
 
export default Admin;