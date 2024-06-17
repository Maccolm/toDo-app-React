import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
	res.setHeader('Access-Control-Allow-Origin', 'https://to-do-be4b2neow-maccolms-projects.vercel.app');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  const dataPath = path.join(process.cwd(), 'data.json');
  const data = JSON.parse(await fs.readFile(dataPath, 'utf8'));

  if (req.method === 'GET') {
    res.status(200).json(data.users);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
  res.status(200).json({ message: 'CORS headers set' });
}