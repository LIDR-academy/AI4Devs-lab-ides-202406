import request from 'supertest';
import { app, server } from '../../../index';
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

describe('POST /api/candidates', () => {
    afterAll(async () => {
        server.close();
        // Cleanup database
        await pool.query('DELETE FROM candidates WHERE email = $1', ['john.doe@example.com']);
        await pool.end();
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
});