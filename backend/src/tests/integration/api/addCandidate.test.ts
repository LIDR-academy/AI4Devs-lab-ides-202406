import request from 'supertest';
import { app, server } from '../../../index';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

describe('POST /api/candidates', () => {
    beforeAll(async () => {
        await pool.query('DELETE FROM candidates');
    });
    afterAll(async () => {
        console.log("Closing server...")
        server.close();
        await pool.end();
    });
    afterEach(async () => {
        await pool.query('DELETE FROM candidates');
    });

    it('should return 201 when a candidate is added successfully', async () => {
        const candidateData = {
            candidate: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                phone: '1234567890',
                address: '123 Main St'
            },
            education: [],
            workExperience: [],
            documents: []
        };

        const response = await request(app)
            .post('/api/candidates')
            .send(candidateData)
            .set('Authorization', `Bearer valid_token`);

        expect(response.status).toBe(201);

        // Check against database that candidate is created
        const result = await pool.query('SELECT * FROM candidates WHERE email = $1', ['john.doe@example.com']);
        expect(result.rowCount).toBeGreaterThan(0);
    });

    it('should return 400 for invalid input data', async () => {
        const invalidCandidateData = {
            candidate: {
                firstName: '',
                lastName: 'Doe',
                email: 'invalid-email',
                phone: '1234567890',
                address: '123 Main St'
            },
            education: [],
            workExperience: [],
            documents: []
        };

        const response = await request(app)
            .post('/api/candidates')
            .send(invalidCandidateData)
            .set('Authorization', `Bearer valid_token`);

        expect(response.status).toBe(400);
    });
});