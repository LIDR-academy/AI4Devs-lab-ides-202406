import React, { useState } from 'react';
import axios from 'axios';
import './AddCandidateForm.css'; // Import the CSS file here

const AddCandidateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    education: '',
    workExperience: '',
    resume: null, // Assuming 'cv' is handled as 'resume' in the form
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) errors.email = "Email is required.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) data.append(key, value);
    });

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
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
        className="form-field"
      />
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        placeholder="Phone Number"
        className="form-field"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Address"
        className="form-field"
      />
      <input
        type="text"
        name="education"
        value={formData.education}
        onChange={handleInputChange}
        placeholder="Education"
        className="form-field"
      />
      <input
        type="text"
        name="workExperience"
        value={formData.workExperience}
        onChange={handleInputChange}
        placeholder="Work Experience"
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