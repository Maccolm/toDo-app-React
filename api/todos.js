import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    const dataPath = path.join(process.cwd(), 'data.json');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        const data = JSON.parse(await fs.readFile(dataPath, 'utf8'));

        if (req.method === 'GET') {
            const userId = req.query.userId;
            const userTodos = data.todos.filter(todo => todo.userId === userId);
            res.status(200).json(userTodos);
        } else if (req.method === 'POST') {
            const newTodo = req.body;
            newTodo.id = uuidv4();
            data.todos.push(newTodo);
            await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
            res.status(201).json(newTodo);
        } else if (req.method === 'PUT') {
            const updatedTodo = req.body;
            const index = data.todos.findIndex(todo => todo.id === updatedTodo.id);
            if (index !== -1) {
                data.todos[index] = updatedTodo;
                await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
                res.status(200).json(updatedTodo);
            } else {
                res.status(404).json({ message: 'Todo not found' });
            }
        } else if (req.method === 'DELETE') {
            const { id } = req.query;
            const updatedTodos = data.todos.filter(todo => todo.id !== id);
            if (updatedTodos.length !== data.todos.length) {
                data.todos = updatedTodos;
                await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
                res.status(200).json({ message: 'Todo deleted' });
            } else {
                res.status(404).json({ message: 'Todo not found' });
            }
        } else {
            res.status(405).json({ message: "Method not allowed" });
        }
    } catch (error) {
        console.error('Error handling request', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
