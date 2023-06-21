import './App.css';
import Sidepanel from './components/Sidepanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

function App() {
    return (
      <>
        <Router>
          <Sidepanel />
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/projects/:id' element={<ProjectDetails/>} />
          </Routes>
      </Router>
      </>
  
  );
  
  
}

export default App;
