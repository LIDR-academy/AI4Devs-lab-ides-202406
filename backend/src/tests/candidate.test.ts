import request from 'supertest';
import { app } from '../index';
import prisma from '../index';

describe('Candidate API', () => {
  beforeAll(async () => {
    // Clear the database before running tests
    await prisma.candidate.deleteMany();
  });

  afterAll(async () => {
    // Close the database connection after all tests
    await prisma.$disconnect();
  });

  it('should create a new candidate', async () => {
    const candidateData = {
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      address: '123 Main St',
      education: "Bachelor's Degree",
      workExperience: '5 years'
    };

    const response = await request(app)
      .post('/api/candidates')
      .send(candidateData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.name).toBe(candidateData.name);
    expect(response.body.email).toBe(candidateData.email);
  });

  it('should not create a candidate with missing fields', async () => {
    const incompleteData = {
      name: 'Jane',
      surname: 'Doe'
    };

    const response = await request(app)
      .post('/api/candidates')
      .send(incompleteData);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  it('should not create a candidate with an invalid email', async () => {
    const invalidEmailData = {
      name: 'Alice',
      surname: 'Smith',
      email: 'invalid-email',
      phone: '1234567890',
      address: '456 Elm St',
      education: "Master's Degree",
      workExperience: '3 years'
    };

    const response = await request(app)
      .post('/api/candidates')
      .send(invalidEmailData);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toBe('Invalid email format');
  });

  it('should not create a candidate with a duplicate email', async () => {
    const duplicateEmailData = {
      name: 'Bob',
      surname: 'Johnson',
      email: 'john.doe@example.com', // This email was used in the first test
      phone: '9876543210',
      address: '789 Oak St',
      education: "Ph.D.",
      workExperience: '10 years'
    };

    const response = await request(app)
      .post('/api/candidates')
      .send(duplicateEmailData);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
    expect(response.body.error).toBe('Email already exists');
  });
});