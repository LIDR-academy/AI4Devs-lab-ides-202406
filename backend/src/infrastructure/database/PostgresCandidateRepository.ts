import { ICandidateRepository } from '../../domain/repositories/ICandidateRepository';
import { Candidate } from '../../domain/entities/Candidate';
import { Pool } from 'pg';

export class PostgresCandidateRepository implements ICandidateRepository {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            connectionString: process.env.DATABASE_URL
        });
    }

    public async add(candidate: Candidate): Promise<void> {
        const query = 'INSERT INTO candidates (first_name, last_name, email, phone, address) VALUES ($1, $2, $3, $4, $5)';
        const values = [candidate.firstName, candidate.lastName, candidate.email, candidate.phone, candidate.address];
        await this.pool.query(query, values);
    }
}