import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Dashboard from './pages/Dashboard';
import AddCandidateForm from './components/AddCandidateForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/add-candidate">Add Candidate</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/add-candidate" element={<AddCandidateForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;