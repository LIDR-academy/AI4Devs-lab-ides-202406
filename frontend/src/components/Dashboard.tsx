import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  let navigate = useNavigate();

  const handleAddCandidate = () => {
    navigate('/add-candidate');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <button onClick={handleAddCandidate} className="btn btn-primary btn-lg">
          Añadir Candidato
        </button>
      </div>
    </div>
  );
};

export default Dashboard;