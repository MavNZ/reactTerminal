import React from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link 
} from "react-router-dom"
import './App.css'
import MyTerminal from './terminal'
import MyComponent from './terminal2'
import ReactTerminal from './terminal3'

function App() {
	return (
    <Router>
      <div>
        <nav>
          <div className="container space-around">
            <Link to="/">Home</Link>
            <Link to="/terminal1">Terminal</Link>
            <Link to="/terminal2">Terminal2</Link>
            <Link to="/terminal3">Terminal3</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/terminal1" element={<MyTerminal />} />
          <Route path="/terminal2" element={<MyComponent />} />
          <Route path="/terminal3" element={<ReactTerminal />} />
          <Route path="/" element={<h1>Terminal Test!!!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
