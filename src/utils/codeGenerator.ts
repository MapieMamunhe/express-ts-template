import crypto from 'crypto';

export const generateNumericCode = (): string => {
  // Generates a random number between 10,000,000 and 99,999,999
  const buffer = crypto.randomBytes(4);
  const number = buffer.readUInt32BE(0) % 90000000 + 10000000;
  return number.toString();
};