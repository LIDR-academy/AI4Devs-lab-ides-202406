import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client';
import { BinaryLike, createCipheriv, createDecipheriv, randomBytes, scryptSync } from 'crypto';

dotenv.config()

if (!process.env.ENCRYPTION_KEY) {
  throw new Error('Encryption key not found');
}

const prisma = new PrismaClient();

// Encryption and decryption setup
const algorithm = 'aes-256-ctr';
const key = Buffer.from(process.env.ENCRYPTION_KEY, 'base64')

export const encrypt = (data: BinaryLike) => {
  const iv = randomBytes(16);
  const cipher = createCipheriv(algorithm, key, iv);
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  const hash = Buffer.concat([iv, encrypted]).toString('base64');

  return hash;
};

export const decrypt = (encrypted: string): string => {
  const hash = Buffer.from(encrypted, 'base64')
  const iv = hash.subarray(0, 16);
  const content = hash.subarray(16);

  const decipher = createDecipheriv(algorithm, key, iv);
  const decrypted = Buffer.concat([decipher.update(content), decipher.final()]);

  return decrypted.toString();
};
