import request from 'supertest';
import { app } from '../index';
import { Request, Response, NextFunction } from 'express'; // Import the necessary types

describe('GET /', () => {
    it('responds with Hello World!', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello World!');
    });
});

describe('POST /data', () => {
    it('responds with the created data', async () => {
        const data = { name: 'John Doe', age: 30 };
        const response = await request(app).post('/data').send(data);
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(expect.objectContaining(data));
    });
});

describe('GET /data/:id', () => {
    it('responds with the data for the given id', async () => {
        const id = 1;
        const response = await request(app).get(`/data/${id}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', id);
    });

    it('responds with 404 if data not found', async () => {
        const id = 999;
        const response = await request(app).get(`/data/${id}`);
        expect(response.statusCode).toBe(404);
    });
});