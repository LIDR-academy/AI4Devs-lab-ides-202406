import { Candidate } from '../domain/entities/Candidate';
import { ICandidateRepository } from '../domain/repositories/ICandidateRepository';

export class AddCandidateUseCase {
    constructor(private candidateRepository: ICandidateRepository) {}

    public async execute(candidate: Candidate): Promise<void> {
        await this.candidateRepository.add(candidate);
    }
}