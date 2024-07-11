import React, { useState } from 'react';
import AddCandidateForm from './AddCandidateForm'; // Ensure this import is correct

export const Dashboard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openAddCandidateForm = () => setIsFormOpen(true);

  return (
    <>
      <button onClick={openAddCandidateForm}>Add Candidate</button>
      {isFormOpen && <AddCandidateForm />}
    </>
  );
};