import './App.css';
import Sidepanel from './components/Sidepanel';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Login from './pages/Login';
import { useEffect,useState } from 'react';

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
      <Router >
        <Sidepanel />
        <Routes>
          
          <Route path='/' element={user ? <Dashboard user={user}/> : <Navigate to="/login"/> }/>
          <Route path='/login' element={user ? <Navigate to="/"/> : <Login/>}></Route>
          <Route path='/projects' element={<Projects/>} />
          <Route path='/projects/:id' element={<ProjectDetails/>} />
        </Routes>
    </Router>
    </>
      
  
  );
  
  
}

export default App;
