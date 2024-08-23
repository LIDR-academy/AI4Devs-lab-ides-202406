import express from 'express';
import { addCandidate } from '../controllers/candidateController';
import { upload } from '../middleware/upload';

const router = express.Router();

router.post('/candidates', upload.single('cv'), addCandidate);

export default router;