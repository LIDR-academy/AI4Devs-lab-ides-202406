import request from 'supertest';
import { app, server } from '../index';
import { Request, Response, NextFunction } from 'express'; // Import the necessary types

describe('GET /', () => {
    afterAll((done) => {
        server.close(done);
    });

    it('responds with Hello LTI!', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hola LTI!');
    });
});
