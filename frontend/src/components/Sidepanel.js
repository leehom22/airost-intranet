import React , { useState }from "react";
import { Link } from "react-router-dom";
import * as faicon from 'react-icons/fa';
import * as aiicon from 'react-icons/ai';
import { IconContext } from 'react-icons';
import './Sidepanel.css';
import { Sidebar } from './Sidebar';

function Sidepanel(){
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);

    const logout = () =>{
      window.open("http://localhost:5000/auth/logout","_self")
    }
    return (
        <>

        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='sidebar'>
          
          <Link to='#' className='menu-bars'>
            <faicon.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <sidebar className={sidebar ? 'side-menu active' : 'side-menu'}>
        
          <ul className='side-menu-items'>
          
            <li className='sidebar-toggle' onClick={showSidebar}>
              <Link to='#' className='menu-bars'>
                <aiicon.AiOutlineClose />
              </Link>
            </li>
            <img src="icon.jpg" />
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                
                </li>
              );
            })}
            <li className="side-text" onClick={logout}><Link><aiicon.AiOutlineLogout /><span>Log Out</span></Link></li>
          </ul>
        </sidebar>
      </IconContext.Provider>
        </>
    )
}

export default Sidepanel;