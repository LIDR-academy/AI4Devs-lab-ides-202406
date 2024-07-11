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
        const client = await this.pool.connect();
        try {
            await client.query('BEGIN');
            const candidateQuery = 'INSERT INTO candidates (first_name, last_name, email, phone, address) VALUES ($1, $2, $3, $4, $5) RETURNING id';
            const candidateValues = [candidate.firstName, candidate.lastName, candidate.email.getValue(), candidate.phone.getValue(), candidate.address];
            const res = await client.query(candidateQuery, candidateValues);
            const candidateId = res.rows[0].id;

            for (const edu of candidate.education) {
                const educationQuery = 'INSERT INTO education (candidate_id, institution, degree, start_date, end_date) VALUES ($1, $2, $3, $4, $5)';
                const educationValues = [candidateId, edu.institution, edu.degree, edu.startDate, edu.endDate];
                await client.query(educationQuery, educationValues);
            }

            for (const work of candidate.workExperience) {
                const workQuery = 'INSERT INTO work_experience (candidate_id, company, position, start_date, end_date, description) VALUES ($1, $2, $3, $4, $5, $6)';
                const workValues = [candidateId, work.company, work.position, work.startDate, work.endDate, work.description];
                await client.query(workQuery, workValues);
            }

            for (const doc of candidate.documents) {
                const documentQuery = 'INSERT INTO documents (candidate_id, file_name, file_type, content) VALUES ($1, $2, $3, $4)';
                const documentValues = [candidateId, doc.fileName, doc.type, doc.content];
                await client.query(documentQuery, documentValues);
            }

            await client.query('COMMIT');
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();
        }
    }
}