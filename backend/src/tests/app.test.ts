import request from 'supertest';
import { app } from '../index';
import { Request, Response, NextFunction } from 'express'; // Import the necessary types

describe('GET /', () => {
    it('responds with Hola LTI!', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hola LTI!');
    });
});

describe('POST /candidates', () => {
    it('should accept and process candidate data', async () => {
        const candidateData = {
            nombre: 'Juan',
            apellido: 'Pérez',
            email: 'juan.perez@example.com',
            telefono: '1234567890',
            direccion: 'Calle Falsa 123',
            educacion: 'Universidad Nacional',
            experienciaLaboral: 'Desarrollador Web - 5 años'
        };

        const response = await request(app)
            .post('/candidates')
            .send(candidateData)
            .expect(200);

        expect(response.body.message).toEqual('Candidato añadido exitosamente');
    });
});