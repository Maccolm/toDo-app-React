import { promises as fs } from 'fs';
import path from 'path';

const handler = async (req, res) => {
  const dataPath = path.join(process.cwd(), 'data.json');
  const data = await fs.readFile(dataPath, 'utf8');
  const users = JSON.parse(data).users;
  res.status(200).json(users);
};

export default handler;