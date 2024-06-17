const fs = require('fs').promises;
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 6001;

const allowedOrigins = [
  'https://to-do-app-gold-iota.vercel.app/',
  'http://localhost:5173'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const dataFilePath = './data.json';

app.get('/api/todos', async (req, res) => {
  try {
    console.log('Reading todos from file');
    const data = await fs.readFile(dataFilePath, 'utf8');
    const todos = JSON.parse(data);
    console.log('Todos:', todos);
    res.json(todos);
  } catch (error) {
    console.error('Error reading file', error);
    res.status(500).json({ message: 'Error reading file' });
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    const newTodo = req.body;
    console.log('New todo:', newTodo);
    const data = await fs.readFile(dataFilePath, 'utf8');
    const todos = JSON.parse(data);
    todos.push(newTodo);
    await fs.writeFile(dataFilePath, JSON.stringify(todos, null, 2));
    console.log('Updated todos:', todos);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error('Error writing file', error);
    res.status(500).json({ message: 'Error writing file' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
