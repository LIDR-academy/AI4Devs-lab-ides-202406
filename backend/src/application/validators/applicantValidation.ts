import { z } from 'zod';

export const applicantSchema = z.object({
  firstName: z.string().trim().min(2).max(120),
  lastName: z.string().trim().min(2).max(120),
  socialSecurityNumber: z.optional(z.string().max(20)),
  dateOfBirth: z.optional(z.string().max(20)), // Consider using a date validation library
  email: z.string().email(),
  phoneCode: z.string().min(2).max(3),
  phone: z.string().max(10),
  street: z.optional(z.string().max(80)),
  exteriorNumber: z.optional(z.string().max(10)),
  interiorNumber: z.optional(z.string().max(10)),
  city: z.string().max(120),
  country: z.string().max(3), // Assuming ISO-3166-1 alpha-3
  education: z.string().trim(),
  professionalExperience: z.string().trim(),
});
