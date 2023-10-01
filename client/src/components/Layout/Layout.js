import { Outlet } from "react-router-dom";
import Sidepanel from "../Sidepanel";
import './Layout.css'
import useAuth from "../../hooks/useAuth";
 const Layout = () => {
    const user = useAuth();
    return ( 
        <main className="App">
            {user ?<Sidepanel /> :null} 
            <div className="outlet">
                <Outlet/>
            </div>
        </main>
     );
 }
  
 export default Layout;
