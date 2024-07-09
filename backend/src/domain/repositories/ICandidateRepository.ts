import { Candidate } from '../entities/Candidate';

export interface ICandidateRepository {
    add(candidate: Candidate): Promise<void>;
}