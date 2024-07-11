import React, { ChangeEvent, FormEvent, useState } from 'react';

const AddCandidateForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3010/candidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
        alert('Candidato añadido exitosamente');
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar formulario');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Nombre:
          </label>
          <input type="text" className="form-control" id="firstName" name="firstName" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Apellido:
          </label>
          <input type="text" className="form-control" id="lastName" name="lastName" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico:
          </label>
          <input type="email" className="form-control" id="email" name="email" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Teléfono:
          </label>
          <input type="tel" className="form-control" id="phone" name="phone" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Dirección:
          </label>
          <input type="text" className="form-control" id="address" name="address" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="education" className="form-label">
            Educación:
          </label>
          <input type="text" className="form-control" id="education" name="education" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="experience" className="form-label">
            Experiencia Laboral:
          </label>
          <textarea className="form-control" id="experience" name="experience" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default AddCandidateForm;