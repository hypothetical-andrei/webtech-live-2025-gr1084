import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Tasks from './components/Tasks';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/tasks/:id' element={<Tasks />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
