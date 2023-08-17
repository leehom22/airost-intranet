import './App.css';
import Sidepanel from './components/Sidepanel';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Login from './pages/Login';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import { useEffect,useState } from 'react';
import { AuthContext } from './context/authContext';

function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const getUser = async()=>{
      fetch("http://localhost:5000/auth/login/success",{
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type" : "application/json",
          "Access-Control-Allow-Credentials": true,
        }
      }
      ).then(response => {
        if(response.status === 200){
          return response.json();
        }
        throw new Error("authentication failed")
      }).then(resObject => {
        setUser(resObject.user)
      }).catch(e => console.log(e))
    }
    getUser();
  }, [])

  
  console.log(user)
    return (
    <>
    <AuthContext.Provider value={user}>
          {/* Show Sidepanel if user logged in */}
          {user ?<Sidepanel /> :null}
          <Routes>
            <Route path="/" element={<Layout/>}>

              <Route path='/login' element={user ? <Navigate to="/"/> : <Login/>}></Route>

              <Route element={<RequireAuth/>}>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/projects' element={<Projects/>} />
                <Route path='/projects/:id' element={<ProjectDetails/>} />
              </Route>
            </Route>

            {/* If user no logged in, navigate to /login*/}
          </Routes>
    </AuthContext.Provider>
    </>
      
  
  );
  
  
}

export default App;
