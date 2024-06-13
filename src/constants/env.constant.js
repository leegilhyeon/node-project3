import 'dotenv/config';
// import dotenv from 'dotenv';
// dotenv.config();

console.log('SERVER_PORT:', process.env.SERVER_PORT);
console.log('ACCESS_TOKEN_SECRET:', process.env.ACCESS_TOKEN_SECRET);

export const SERVER_PORT = process.env.SERVER_PORT;
export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;