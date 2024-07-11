import dotenv from 'dotenv';
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { postApplicant } from './interfaces/controllers/ApplicantController';

dotenv.config();

export const app = express();

app.use(express.json());

const port = 3010;

app.get('/', (req, res) => {
  res.send('Hola LTI!');
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.type('text/plain'); 
  res.status(500).send('Something broke!');
});

app.post('/applicant', postApplicant);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
