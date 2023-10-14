import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';


function App() {
  const[search,setSearch] = useState("");
  return (
    <div className="App">
      <LeftSection/>
      <Router>
      <div className="dashboard1">
        <div className='header'>
          <p>Hello Mukesh👋</p>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' />
        </div>
        <Routes>
          <Route path="/" element={<RightSection/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
