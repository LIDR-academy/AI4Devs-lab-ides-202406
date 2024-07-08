import request from 'supertest';
import { app, server } from '../../../index';

describe('POST /api/candidates', () => {
    afterAll((done) => {
        server.close(done);
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
    });
});