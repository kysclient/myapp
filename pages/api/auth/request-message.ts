import type { NextApiRequest, NextApiResponse } from 'next';

const config = {
  domain: process.env.APP_DOMAIN || 'kysclient',
  statement: 'Please sign this message to confirm your identity.',
  uri: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  timeout: 60,
};


