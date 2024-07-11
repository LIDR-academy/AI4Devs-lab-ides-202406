import { z } from 'zod';
import { parseISO } from 'date-fns';

export const applicantSchema = z.object({
  firstName: z.string().trim().min(2).max(120),
  lastName: z.string().trim().min(2).max(120),
  socialSecurityNumber: z.optional(z.string().max(20)),
  dateOfBirth: z.optional(z.string().refine((value) => {
    const dateOfBirth = parseISO(value);
    return dateOfBirth instanceof Date && !isNaN(dateOfBirth.getTime());
  }, 'Invalid date format')),
  email: z.string().email(),
  phoneCode: z.string().min(1).max(3),
  phone: z.string().max(10),
  country: z.string().max(3), // Assuming ISO-3166-1 alpha-3
  state: z.string().max(2), // Assuming ISO-3166-1 alpha-2
  city: z.string().max(120),
  street: z.optional(z.string().max(80)),
  exteriorNumber: z.optional(z.string().max(10)),
  interiorNumber: z.optional(z.string().max(10)),
  education: z.string().trim(),
  professionalExperience: z.string().trim(),
});
