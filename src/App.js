import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Details from './pages/Details'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [shows, setShows] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home shows={shows} setShows={setShows} />}/>
          <Route path="/details/:id" element={<Details shows={shows} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;