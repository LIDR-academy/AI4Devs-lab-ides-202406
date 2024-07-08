import { Request, Response } from 'express';

export class CandidateController {
    public static async addCandidate(req: Request, res: Response): Promise<void> {
        // Aquí se implementará la lógica para añadir un candidato
        res.status(201).send({ message: 'Candidate added successfully' });
    }
}