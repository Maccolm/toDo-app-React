import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://to-do-app-gold-iota.vercel.app/');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  const dataPath = path.join(process.cwd(), 'data.json');
  const data = JSON.parse(await fs.readFile(dataPath, 'utf8'));

  const { userId, id } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'userId is required' });
  }

  if (req.method === 'GET') {
    const userTodos = data.todos.filter(todo => todo.userId === userId);

    if (id) {
      const todo = userTodos.find(todo => todo.id === id);
      if (todo) {
        res.status(200).json(todo);
      } else {
        res.status(404).json({ message: 'Todo not found' });
      }
    } else {
      res.status(200).json(userTodos);
    }
  } else if (req.method === 'POST') {
    const newTodo = req.body;
    data.todos.push(newTodo);
    await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
    res.status(201).json(newTodo);
  } else if (req.method === 'PUT') {
    const updatedTodo = req.body;

    const index = data.todos.findIndex(todo => todo.id === id && todo.userId === userId);

    if (index !== -1) {
      data.todos[index] = { ...data.todos[index], ...updatedTodo };
      await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
      res.status(200).json(data.todos[index]);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } else if (req.method === 'DELETE') {
    const index = data.todos.findIndex(todo => todo.id === id && todo.userId === userId);

    if (index !== -1) {
      const deletedTodo = data.todos.splice(index, 1);
      await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
      res.status(200).json(deletedTodo[0]);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
