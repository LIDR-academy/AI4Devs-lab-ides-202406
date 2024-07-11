import { Request, Response, NextFunction } from 'express';

export function validateCandidateData(req: Request, res: Response, next: NextFunction) {
    const { firstName, lastName, email, phone, address, education, experience } = req.body;

    if (!firstName || !lastName || !email || !phone || !address || !education || !experience) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Validación del formato de email
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexEmail.test(email)) {
        return res.status(400).json({ message: 'El formato del email no es válido' });
    }

    next();
}