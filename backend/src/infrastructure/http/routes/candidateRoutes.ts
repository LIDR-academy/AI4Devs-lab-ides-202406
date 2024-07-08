import { Router } from 'express';
import { CandidateController } from '../controllers/CandidateController';

const router = Router();

router.post('/candidates', CandidateController.addCandidate);

export default router;