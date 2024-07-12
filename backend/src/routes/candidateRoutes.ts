import express, { Request, Response } from 'express';
import { addCandidate } from '../controller/candidateController';
const { body, validationResult } = require('express-validator');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post(
  '/candidates',
  upload.single('resume'),
  [
    body('firstName').notEmpty().withMessage('El nombre es obligatorio'),
    body('lastName').notEmpty().withMessage('El apellido es obligatorio'),
    body('email').isEmail().withMessage('El correo electrónico no es válido'),
    body('phone').notEmpty().withMessage('El teléfono es obligatorio'),
    body('address').notEmpty().withMessage('La dirección es obligatoria'),
    body('education').notEmpty().withMessage('La educación es obligatoria'),
    body('experience').notEmpty().withMessage('La experiencia es obligatoria'),
    body('resume').notEmpty().withMessage('El CV es obligatorio'),
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    addCandidate(req, res); // Ensure addCandidate is a function
  }
);

export default router;