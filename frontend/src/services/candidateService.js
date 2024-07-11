import api from '../utils/api';

const addCandidate = async (candidateData) => {
  try {
    const response = await api.post('/candidates', candidateData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add candidate');
  }
};

export { addCandidate };