import { Pool } from 'pg';
import { PostgresCandidateRepository } from '../../../infrastructure/database/PostgresCandidateRepository';
import { Candidate } from '../../../domain/entities/Candidate';
import { Email } from '../../../domain/entities/Email';
import { PhoneNumber } from '../../../domain/entities/PhoneNumber';
import { Education } from '../../../domain/entities/Education';
import dotenv from 'dotenv';

dotenv.config();

describe('PostgresCandidateRepository', () => {
    let pool: Pool;
    let repository: PostgresCandidateRepository;

    beforeAll(() => {
        pool = new Pool({
            connectionString: process.env.DATABASE_URL
        });
        repository = new PostgresCandidateRepository();
    });

    afterAll(async () => {
        await pool.end();
    });

    afterEach(async () => {
        await pool.query('DELETE FROM documents');
        await pool.query('DELETE FROM work_experience');
        await pool.query('DELETE FROM education');
        await pool.query('DELETE FROM candidates');
    });

    it('should add a candidate successfully', async () => {
        const candidate: Candidate = new Candidate(
            'John',
            'Doe',
            new Email('john.doe@example.com'),
            new PhoneNumber('1234567890'),
            '123 Main St',
            [
                new Education(
                    'University A',
                    'Bachelor of Science',
                    '2010-01-01',
                    '2014-01-01'
                )
            ],
            [
                {
                    company: 'Company A',
                    position: 'Developer',
                    startDate: '2015-01-01',
                    endDate: '2018-01-01',
                    description: 'Developed software'
                }
            ],
            [
                {
                    fileName: 'resume.pdf',
                    type: 'application/pdf',
                    content: Buffer.from('dummy content').toString('base64')
                }
            ]
        );

        await repository.add(candidate);

        const result = await pool.query('SELECT * FROM candidates WHERE email = $1', [candidate.email.getValue()]);
        expect(result.rows.length).toBe(1);
        expect(result.rows[0].first_name).toBe(candidate.firstName);
        expect(result.rows[0].last_name).toBe(candidate.lastName);
        expect(result.rows[0].email).toBe(candidate.email.getValue());
        expect(result.rows[0].phone).toBe(candidate.phone.getValue());
        expect(result.rows[0].address).toBe(candidate.address);

        const candidateId = result.rows[0].id;

        const educationResult = await pool.query('SELECT * FROM education WHERE candidate_id = $1', [candidateId]);
        expect(educationResult.rows.length).toBe(1);
        expect(educationResult.rows[0].institution).toBe(candidate.education[0].institution);
        expect(educationResult.rows[0].degree).toBe(candidate.education[0].degree);

        const workResult = await pool.query('SELECT * FROM work_experience WHERE candidate_id = $1', [candidateId]);
        expect(workResult.rows.length).toBe(1);
        expect(workResult.rows[0].company).toBe(candidate.workExperience[0].company);
        expect(workResult.rows[0].position).toBe(candidate.workExperience[0].position);

        const documentResult = await pool.query('SELECT * FROM documents WHERE candidate_id = $1', [candidateId]);
        expect(documentResult.rows.length).toBe(1);
        expect(documentResult.rows[0].file_name).toBe(candidate.documents[0].fileName);
    });
});