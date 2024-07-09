import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/add-candidate" element={<h1>Candidate form</h1>} />
          <Route path="*" element={
            <header className="App-header">
              <h1>Applicant Tracking System</h1>
              <Link to="/add-candidate" className="App-link">
                Go to Add Candidate Form
              </Link>
            </header>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
