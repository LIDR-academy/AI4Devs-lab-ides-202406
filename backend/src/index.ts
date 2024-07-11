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
    // Log the entire request body to inspect it
    console.log(req.body);
    const { name, email, lastName, phoneNumber, address, education, workExperience, resume } = req.body;
    // Assuming 'resume' is handled appropriately, e.g., saving the file and storing its path
    if (!name || !email) {
      return res.status(400).send('Missing name or email');
    }
    const candidate = await prisma.candidate.create({
      data: {
        name, // Map 'name' from the request to 'firstName' expected by Prisma
        email,
        lastName,
        phoneNumber,
        address,
        education,
        workExperience,
        cv: resume, // Ensure this is the path to the stored file or similar
      },
    });
    res.status(201).json(candidate);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while processing your request.");
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