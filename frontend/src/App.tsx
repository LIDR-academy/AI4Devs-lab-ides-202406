import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import AddCandidateForm from './addCandidate/AddCandidateForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/add-candidate" element={<AddCandidateForm/>} />
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
