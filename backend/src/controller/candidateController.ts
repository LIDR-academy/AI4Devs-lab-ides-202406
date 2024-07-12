import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import multer from 'multer';
import path from 'path';

const prisma = new PrismaClient();

// Configuración de multer para la carga de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

export const addCandidate = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, address, education, experience } = req.body;
    const resume = req.file?.path;

    const candidate = await prisma.candidate.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        address,
        education,
        experience,
        resume: resume || '',
      },
    });

    res.status(201).json({ message: 'Candidato añadido exitosamente', candidate });
  } catch (error) {
    res.status(500).json({ error: 'Error al añadir el candidato' });
  }
};