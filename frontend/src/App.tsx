import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCandidateForm from './components/AddCandidateForm';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Recruiter Dashboard</h1>
      {!showForm ? (
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          Add Candidate
        </button>
      ) : (
        <AddCandidateForm onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}

export default App;