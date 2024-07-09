import React, { useState } from 'react';
import axios from 'axios';
import './AddCandidateForm.css'; // Import the CSS file here

const AddCandidateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null, // Added for file
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation logic here
  
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('resume', formData.resume);
  
    try {
      const response = await axios.post('http://localhost:3010/api/candidates', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
        className="form-field"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        className="form-field"
      />
      <input
        type="file"
        name="resume"
        onChange={handleFileChange}
        className="form-field"
      />
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
};

export default AddCandidateForm;