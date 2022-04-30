import React from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link 
} from "react-router-dom"
import './App.css'
import MyTerminal from './terminals/1/terminal'
import MyComponent from './terminals/2/terminal2'
import ReactTerminal from './terminals/3/terminal3'
import Terminal4 from './terminals/4/terminal4'

function App() {
	return (
    <Router>
      <div>
        <nav>
          <div className="container space-around">
            <Link to="/">Home</Link>
            <Link to="/terminal1">Terminal1</Link>
            <Link to="/terminal2">Terminal2</Link>
            <Link to="/terminal3">Terminal3</Link>
            <Link to="/terminal4">Terminal4</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/terminal1" element={<MyTerminal />} />
          <Route path="/terminal2" element={<MyComponent />} />
          <Route path="/terminal3" element={<ReactTerminal />} />
          <Route path="/terminal4" element={<Terminal4 />} />
          <Route path="/" element={<h1>Terminal Test!!!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
