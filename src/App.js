import './App.css';

import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className='App'>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
