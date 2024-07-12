import express from 'express';
import candidateRoutes from './routes/candidateRoutes';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import helmet from 'helmet';

dotenv.config();
const prisma = new PrismaClient();

export const app = express();
export default prisma;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', candidateRoutes);

// Configurar Content Security Policy
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'"], // Agrega 'unsafe-eval' aquí
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:"],
    connectSrc: ["'self'", "http://localhost:3010"], // Permite conexiones a tu API
    // Agrega más directivas según sea necesario
  },
}));

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});