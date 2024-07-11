import { PrismaClient } from '@prisma/client';
import { Applicant } from '../domain/models/Applicant';
import { encrypt } from '../common/crypt';

const prisma = new PrismaClient().$extends({
  query: {
    applicant: {
      async create({ model, operation, args, query }) {
        // Encrypt PII fields before saving
        const encryptedFields: Array<keyof Applicant> = ['firstName', 'lastName', 'socialSecurityNumber', 'dateOfBirth', 'email', 'phone'];
        encryptedFields.forEach(field => {
          if (args.data[field]) {
            args.data[field] = encrypt(args.data[field].toString());
          }
        });
        return query(args);
      }
    },
  }
});

export default prisma;
