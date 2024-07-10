import { ZodError } from 'zod';
import { Request, Response } from 'express';
import { applicantSchema } from '../../application/validators/applicantValidation';

export async function postApplicant(req: Request, res: Response) {
  try {
    const parsedData = applicantSchema.parse(req.body);
    // await createApplicant(parsedData);
    res.status(201).send("Applicant created successfully.");
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}
