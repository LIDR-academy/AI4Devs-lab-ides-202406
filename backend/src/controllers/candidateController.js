import prisma from '../models/Candidate';

const addCandidate = async (req, res) => {
  const { firstName, lastName, email, phone, address, education, experience, cv } = req.body;

  try {
    const newCandidate = await prisma.candidate.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        address,
        education,
        experience,
        cv
      }
    });

    res.status(201).json({ message: 'Candidate added successfully', candidate: newCandidate });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add candidate' });
  }
};

export default { addCandidate };
