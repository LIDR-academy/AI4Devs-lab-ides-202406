import React, { useState } from 'react';
import axios from 'axios';

const educationSuggestions = [
    'High School Diploma',
    'Associate\'s Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'Ph.D.',
  ];
  
  const workExperienceSuggestions = [
    'Entry Level',
    '1-3 years',
    '3-5 years',
    '5-10 years',
    '10+ years',
  ];
    
interface AddCandidateFormProps {
  onClose: () => void;
}

const AutocompleteInput: React.FC<{
    value: string;
    onChange: (value: string) => void;
    suggestions: string[];
    label: string;
    name: string;
  }> = ({ value, onChange, suggestions, label, name }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
  
    return (
        <div className="mb-3 position-relative">
          <label htmlFor={name} className="form-label">{label}</label>
          <input
            type="text"
            className="form-control"
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            required
          />
          {showSuggestions && (
            <ul className="list-group position-absolute w-100">
              {suggestions
                .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
                .map((item) => (
                  <li
                    key={item}
                    className="list-group-item list-group-item-action"
                    onClick={() => {
                      onChange(item);
                      setShowSuggestions(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          )}
        </div>
      );
  };
  

const AddCandidateForm: React.FC<AddCandidateFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    workExperience: '',
  });

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    if (file) {
      formDataToSend.append('cv', file);
    }

    try {
      const response = await axios.post('/api/candidates', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Candidate added:', response.data);
      onClose();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data.error || 'An error occurred while adding the candidate.');
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="surname" className="form-label">Surname</label>
        <input
          type="text"
          className="form-control"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input
          type="text"
          className="form-control"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
      </div>
        <AutocompleteInput
        value={formData.education}
        onChange={(value) => setFormData({ ...formData, education: value })}
        suggestions={educationSuggestions}
        label="Education"
        name="education"
        />
        <AutocompleteInput
        value={formData.workExperience}
        onChange={(value) => setFormData({ ...formData, workExperience: value })}
        suggestions={workExperienceSuggestions}
        label="Work Experience"
        name="workExperience"
        />
      <div className="mb-3">
        <label htmlFor="cv" className="form-label">CV (PDF or DOCX)</label>
        <input
          type="file"
          className="form-control"
          id="cv"
          accept=".pdf,.docx"
          onChange={handleFileChange}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      
      <button type="submit" className="btn btn-primary me-2" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      <button type="button" className="btn btn-secondary" onClick={onClose} disabled={loading}>
        Cancel
      </button>
    </form>
  );
};

export default AddCandidateForm;