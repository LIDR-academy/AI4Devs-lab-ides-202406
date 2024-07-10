import { Prisma, PrismaClient } from '@prisma/client';
import { BinaryLike, createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';

const prisma = new PrismaClient();

// Encryption and decryption setup
const algorithm = 'aes-256-ctr';
const secretKey = 'your-secret-key'; // Use a secure key
const iv = randomBytes(16); // Initialization vector

const encrypt = (text: BinaryLike) => {
  const cipher = createCipheriv(algorithm, secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex')
  };
};

const decrypt = (hash: { iv: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string; }; content: WithImplicitCoercion<string> | { [Symbol.toPrimitive](hint: "string"): string; }; }) => {
  const decipher = createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));
  const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
  return decrypted.toString();
};

prisma.$extends({
  name: 'crypt',
  query: {
    applicant: {
        async create<T, A>(
          this: T,
          args?: Prisma.Exact<A, Prisma.Args<T, "create">> & StreamdalArgs,
        ): Promise<Prisma.Result<T, A, "create">> {
        // Encrypt PII fields before saving
        const encryptedFields = ['firstName', 'lastName', 'socialSecurityNumber', 'dateOfBirth', 'email', 'phone'];
        encryptedFields.forEach(field => {
          if (params.args.data[field]) {
            params.args.data[field] = encrypt(params.args.data[field]);
          }
        });
      }
    }
  }
});

// Example of decryption after retrieval
const getApplicant = async (id: any) => {
  const applicant = await prisma.applicant.findUnique({ where: { id } });
  if (applicant) {
    // Decrypt PII fields after retrieval
    const decryptedFields = ['firstName', 'lastName', 'socialSecurityNumber', 'dateOfBirth', 'email', 'phone'];
    decryptedFields.forEach(field => {
      if (applicant[field]) {
        applicant[field] = decrypt(applicant[field]);
      }
    });
  }
  return applicant;
};
