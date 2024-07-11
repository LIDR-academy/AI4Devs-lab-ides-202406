import { ZodError } from 'zod';
import { Request, Response } from 'express';
import prisma from '../../infrastructure/prisma'
import { applicantSchema } from '../../application/validators/applicantValidation';

export async function postApplicant(req: Request, res: Response) {
  try {
    const applicant = applicantSchema.parse(req.body);

    const createdApplicant = await prisma.applicant.create({
      data: applicant,
    });

    res.status(201).send({ id: createdApplicant.id.toString() });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}
