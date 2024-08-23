import { Request, Response } from 'express';
import prisma from '../index';

export const addCandidate = async (req: Request, res: Response) => {
  console.log('Received request to add candidate:', req.body);
  try {
    const { name, surname, email, phone, address, education, workExperience } = req.body;
    const cvFile = req.file;

    // Server-side validation
    if (!name || !surname || !email || !phone || !address || !education || !workExperience) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check if email already exists
    const existingCandidate = await prisma.candidate.findUnique({ where: { email } });
    if (existingCandidate) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create new candidate
    const newCandidate = await prisma.candidate.create({
      data: {
        name,
        surname,
        email,
        phone,
        address,
        education,
        workExperience,
        cvFilePath: cvFile ? cvFile.path : null,
      },
    });

    res.status(201).json(newCandidate);
  } catch (error) {
    console.error('Error adding candidate:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};