import './App.css';
import Sidepanel from './components/Sidepanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

function App() {
    return (
      <>
        <Router>
          <Sidepanel />
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/projects' element={<Projects/>} />
          </Routes>
      </Router>
      </>
  
  );
  
  
}

export default App;
