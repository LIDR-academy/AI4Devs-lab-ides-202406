import { Request, Response } from 'express';
import { AddCandidateUseCase } from '../../../application/AddCandidateUseCase';
import { Candidate } from '../../../domain/entities/Candidate';
import { Education } from '../../../domain/entities/Education';
import { WorkExperience } from '../../../domain/entities/WorkExperience';
import { Document } from '../../../domain/entities/Document';
import { Email } from '../../../domain/entities/Email';
import { PhoneNumber } from '../../../domain/entities/PhoneNumber';
import { PostgresCandidateRepository } from '../../database/PostgresCandidateRepository';
import { ValidationError } from '../../../domain/entities/ValidationError';

export class CandidateController {
    public static async addCandidate(req: Request, res: Response): Promise<void> {
        try {
            const { firstName, lastName, email, phone, address } = req.body.candidate;

            const education = req.body.education.map((edu: any) => new Education(edu.institution, edu.degree, edu.startDate, edu.endDate));
            const workExperience = req.body.workExperience.map((work: any) => new WorkExperience(work.company, work.position, work.startDate, work.endDate, work.description));
            const documents = req.body.documents.map((doc: any) => new Document(doc.fileName, doc.type, doc.content));

            const candidate = new Candidate(firstName, lastName, new Email(email), new PhoneNumber(phone), address, education, workExperience, documents);
            const repository = new PostgresCandidateRepository();
            const useCase = new AddCandidateUseCase(repository);

            await useCase.execute(candidate);
            res.status(201).send({ message: 'Candidate added successfully' });
        } catch (error: any) {
            console.error(error);
            if (error.name === 'ValidationError') {
                res.status(400).send({ message: error.message });
            } else {
                res.status(500).send({ message: 'Internal Server Error' });
            }
        }
    }
}