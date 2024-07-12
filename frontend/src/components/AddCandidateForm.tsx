import React, { useState } from 'react';
import axios from '../axiosConfig'; // Importa la configuración de Axios

const AddCandidateForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    resume: null as File | null,
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    resume: '',
  });

  const validate = () => {
    let valid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      education: '',
      experience: '',
      resume: '',
    };

    if (!formData.firstName) {
      newErrors.firstName = 'El nombre es obligatorio';
      valid = false;
    }
    if (!formData.lastName) {
      newErrors.lastName = 'El apellido es obligatorio';
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
      valid = false;
    }
    if (!formData.phone) {
      newErrors.phone = 'El teléfono es obligatorio';
      valid = false;
    }
    if (!formData.address) {
      newErrors.address = 'La dirección es obligatoria';
      valid = false;
    }
    if (!formData.education) {
      newErrors.education = 'La educación es obligatoria';
      valid = false;
    }
    if (!formData.experience) {
      newErrors.experience = 'La experiencia es obligatoria';
      valid = false;
    }
    if (!formData.resume) {
      newErrors.resume = 'El CV es obligatorio';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        data.append(key, formData[key as keyof typeof formData] as string | Blob);
      }
    }

    try {
      const response = await axios.post('/api/candidates', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Candidato añadido exitosamente');
    } catch (error) {
      console.error(error);
      alert('Error al añadir el candidato');
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-lg shadow-lg max-w-md w-full mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Añadir Candidato</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-white font-semibold">Nombre</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="p-3 mb-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            required
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white font-semibold">Apellido</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="p-3 mb-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            required
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white font-semibold">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 mb-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white font-semibold">Teléfono</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 mb-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            required
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white font-semibold">Dirección</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="p-3 mb-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            required
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white font-semibold">Educación</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            className="p-3 mb-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            required
          />
          {errors.education && <p className="text-red-500 text-sm">{errors.education}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white font-semibold">Experiencia Laboral</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="p-3 mb-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            required
          />
          {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white font-semibold">Cargar CV</label>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="p-3 mb-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            required
          />
        </div>
        <button type="submit" className="p-3 bg-yellow-500 text-white rounded hover:bg-yellow-700 transition duration-300">Añadir Candidato</button>
      </form>
    </div>
  );
};

export default AddCandidateForm;