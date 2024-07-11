import React, { useState } from 'react';
import { Button } from '@mui/material';
import ApplicantForm from './ApplicantForm';

function ApplicantDashboard() {
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => setShowForm(!showForm);

  return (
	<div>
	  {!showForm && <Button variant="contained" onClick={toggleFormVisibility}>
		  Add Applicant
	  </Button>}
	  {showForm && <ApplicantForm />}
	</div>
  );
}

export default ApplicantDashboard;
