import React, { useState } from 'react';
import './AddCandidateForm.css';

const AddCandidateForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    educacion: '',
    experiencia: '',
    cv: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      cv: e.target.files ? e.target.files[0] : null as File | null
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validaciones y envío de datos
  };

  return (
    <form className="add-candidate-form" onSubmit={handleSubmit}>
      <h2>Datos del candidato</h2>
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input id="nombre" type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="apellido">Apellido:</label>
        <input id="apellido" type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="telefono">Teléfono:</label>
        <input id="telefono" type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="direccion">Dirección:</label>
        <textarea id="direccion" name="direccion" value={formData.direccion} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="educacion">Educación:</label>
        <textarea id="educacion" name="educacion" value={formData.educacion} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="experiencia">Experiencia Laboral:</label>
        <textarea id="experiencia" name="experiencia" value={formData.experiencia} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="cv">CV:</label>
        <input id="cv" type="file" name="cv" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
      </div>
      <div className="form-actions">
        <button type="submit">Añadir Candidato</button>
        <button type="button">Cancelar</button>
      </div>
    </form>
  );
};

export default AddCandidateForm;