import './App.css';
import Sidepanel from './components/Sidepanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Events  from './pages/Events';

function App() {
    return (
      <>
        <Router>
          <Sidepanel />
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/events' element={<Events/>} />
          </Routes>
      </Router>
      </>
  
  );
  
  
}

export default App;
