import { Request, Response, NextFunction } from 'express';
import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import { validateCandidateData } from './middleware/validateCandidateData';
import cors from 'cors';

dotenv.config();
const prisma = new PrismaClient();

export const app = express();
export default prisma;

const port = 3010;

app.use(cors()); // Esto habilitará CORS para todas las rutas y métodos

app.get('/', (req, res) => {
  res.send('Hola LTI!');
});

app.use(express.json()); // Middleware para parsear JSON

app.post('/candidates', validateCandidateData, async (req: Request, res: Response) => {
  try {
      const { firstName, lastName, email, phone, address, education, experience } = req.body;
      const newCandidate = await prisma.candidate.create({
          data: {
              nombre: firstName,
              apellido: lastName,
              email,
              telefono: phone,
              direccion: address,
              educacion: education,
              experienciaLaboral: experience
          }
      });

      res.status(201).json(newCandidate);
  } catch (error) {
      console.error('Error al guardar el candidato:', error);
      res.status(500).json({ message: 'Error al procesar los datos del candidato' });
  }
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.type('text/plain'); 
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});