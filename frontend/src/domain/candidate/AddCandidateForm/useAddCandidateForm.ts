// frontend/src/domain/candidate/AddCandidateForm/useAddCandidateForm.ts

import { useState } from 'react';
import { Candidate } from './Candidate';
import { CandidateErrors } from './CandidateErrors';

export const useAddCandidateForm = () => {
  const [formData, setFormData] = useState<Candidate>({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    workExperience: '',
    cv: null,
  });

  const [errors, setErrors] = useState<CandidateErrors>({});

  const validateStep1 = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors = { ...newErrors, name: 'Name is required' };
    if (!formData.lastName.trim()) newErrors = { ...newErrors, lastName: 'Last name is required' };
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }; 
  
  const validateStep2 = () => {
    let newErrors = {};
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors = { ...newErrors, email: 'Invalid email' };
    if (!formData.phone.trim()) newErrors = { ...newErrors, phone: 'Phone is required' };
    if (!formData.phone.match(/^\+34\d{9}$/)) newErrors = { ...newErrors, phone: 'Invalid phone number' };
     if (!formData.address.trim()) newErrors = { ...newErrors, address: 'Address is required' };
    if (!formData.education.trim()) newErrors = { ...newErrors, education: 'Education is required' };
    if (!formData.workExperience.trim()) newErrors = { ...newErrors, workExperience: 'Work experience is required' };
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors = { ...newErrors, name: 'Name is required' };
    if (!formData.lastName.trim()) newErrors = { ...newErrors, lastName: 'Last name is required' };
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) newErrors = { ...newErrors, email: 'Invalid email' };
    if (!formData.phone.trim()) newErrors = { ...newErrors, phone: 'Phone is required' };
    if (!formData.phone.match(/^\+34\d{9}$/)) newErrors = { ...newErrors, phone: 'Invalid phone number' };
    if (!formData.address.trim()) newErrors = { ...newErrors, address: 'Address is required' };
    if (!formData.education.trim()) newErrors = { ...newErrors, education: 'Education is required' };
    if (!formData.workExperience.trim()) newErrors = { ...newErrors, workExperience: 'Work experience is required' };
    if (!formData.cv) newErrors = { ...newErrors, cv: 'CV is required' };
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const resetForm = () => {
    setFormData({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      education: '',
      workExperience: '',
      cv: null,
    });
    setErrors({});
  };

  return { formData, setFormData, validateForm, validateStep1, validateStep2, errors, setErrors, resetForm };
};