import React, { useState } from 'react';
import { addCandidate } from '../services/candidateService';

const AddCandidateForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    cv: null
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCandidate(formData);
      alert('Candidate added successfully');
    } catch (error) {
      alert('Failed to add candidate');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      <input type="text" name="education" placeholder="Education" onChange={handleChange} />
      <input type="text" name="experience" placeholder="Experience" onChange={handleChange} />
      <input type="file" name="cv" onChange={handleChange} />
      <button type="submit">Add Candidate</button>
    </form>
  );
};

export default AddCandidateForm;