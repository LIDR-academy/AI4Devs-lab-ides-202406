import { Request, Response } from 'express';
import { AddCandidateUseCase } from '../../../application/AddCandidateUseCase';
import { Candidate } from '../../../domain/entities/Candidate';
import { PostgresCandidateRepository } from '../../database/PostgresCandidateRepository';

export class CandidateController {
    public static async addCandidate(req: Request, res: Response): Promise<void> {
        const { firstName, lastName, email, phone, address } = req.body.candidate;
        const candidate = new Candidate(firstName, lastName, email, phone, address);
        const repository = new PostgresCandidateRepository();
        const useCase = new AddCandidateUseCase(repository);

        await useCase.execute(candidate);
        res.status(201).send({ message: 'Candidate added successfully' });
    }
}