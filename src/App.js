import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contatti from './pages/Contatti';
import './App.css';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="/contatti" element={<Contatti  />} />

                
            </Routes>
        </Router>
    
  );
}

export default App;
