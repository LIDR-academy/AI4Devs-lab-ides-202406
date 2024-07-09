import { Request, Response, NextFunction } from 'express';
import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config();
const prisma = new PrismaClient();

export const app = express();
export default prisma;

const port = 3010;

// Use Express built-in middleware for parsing JSON request bodies
app.use(express.json());

app.use((req, res, next) => {
  const originalSend = res.send;
  res.send = function(body) {
    if (res.statusCode === 400) {
      console.log(`Logging 400 response: ${req.method} ${req.url} - Body: ${body}`);
    }
    return originalSend.apply(this, arguments.length ? [arguments[0]] : []);
  };
  next();
});

app.get('/', (req, res) => {
  res.send('Hola LTI!');
});

const upload = multer({ dest: 'uploads/' }); // Configure multer, setting uploads directory

app.post('/api/candidates', upload.single('resume'), async (req, res) => {
  try {
    const { name, email } = req.body; // Now multer parses 'name' and 'email'
    if (!name || !email) {
      return res.status(400).send('Missing name or email');
    }

    // Proceed with your existing logic
    // Example: Save the candidate using Prisma
    const candidate = await prisma.candidate.create({
      data: {
        firstName: name,
        email,
      },
    });

    res.status(201).json(candidate);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
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