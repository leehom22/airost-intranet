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

    return (
        <>

        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='sidebar'>
          
          <Link to='#' className='menu-bars'>
            <faicon.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <sidebar className={sidebar ? 'side-menu active' : 'side-menu'}>
        
          <ul className='side-menu-items' onClick={showSidebar}>
          
            <li className='sidebar-toggle'>
              <Link to='#' className='menu-bars'>
                <aiicon.AiOutlineClose />
              </Link>
            </li>
            <img src="icon.jpg" width="100px"/>
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
          </ul>
        </sidebar>
      </IconContext.Provider>
        </>
    )
}

export default Sidepanel;