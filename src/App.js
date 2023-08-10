import './App.css';
import Sidepanel from './components/Sidepanel';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Doc from './pages/Documentation/Doc';
import DocBlog from './pages/Documentation/component/Doc-blog';

function App() {
    return (
      <>
        <Router>
          <Sidepanel />
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/projects' element={<Projects/>} />
              <Route path='/doc' element={<Doc/>}/>
              <Route path='/doc/:id' element={<DocBlog/>}/>
          </Routes>
      </Router>
      </>
  
  );
  
  
}

export default App;
