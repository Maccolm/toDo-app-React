import { promises as fs } from 'fs'
import path from 'path'

export default async function handler(req, res) {
	const dataPath = path.join(process.cwd(), 'db.json');
	const data = JSON.parse(await fs.readFile(dataPath, 'utf8'));

	if(req.method === 'GET') {
		res.status(200).json(data.todos)
	} else {
		res.status(405).json({message: "Method not allowed"})
	}
}