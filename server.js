const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 6001;

const allowedOrigins = [
  'https://to-do-app-gold-iota.vercel.app',
  'http://localhost:5173'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

const dataFilePath = path.join(__dirname, 'data.json');

app.get('/api/todos', async (req, res) => {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    const todos = JSON.parse(data);
    res.json(todos);
  } catch (error) {
    console.error('Error reading file', error);
    res.status(500).json({ message: 'Error reading file' });
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    const newTodo = req.body;
    const data = await fs.readFile(dataFilePath, 'utf8');
    const todos = JSON.parse(data);
    todos.push(newTodo);
    await fs.writeFile(dataFilePath, JSON.stringify(todos, null, 2));
    res.status(201).json(newTodo);
  } catch (error) {
    console.error('Error writing file', error);
    res.status(500).json({ message: 'Error writing file' });
  }
});

app.put('/api/todos/:id', async (req, res) => {
  try {
    const updatedTodo = req.body;
    const data = await fs.readFile(dataFilePath, 'utf8');
    let todos = JSON.parse(data);
    todos = todos.map(todo => todo.id === req.params.id ? updatedTodo : todo);
    await fs.writeFile(dataFilePath, JSON.stringify(todos, null, 2));
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error('Error updating file', error);
    res.status(500).json({ message: 'Error updating file' });
  }
});

app.delete('/api/todos/:id', async (req, res) => {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    let todos = JSON.parse(data);
    todos = todos.filter(todo => todo.id !== req.params.id);
    await fs.writeFile(dataFilePath, JSON.stringify(todos, null, 2));
    res.status(200).json({ message: 'Todo deleted' });
  } catch (error) {
    console.error('Error deleting todo', error);
    res.status(500).json({ message: 'Error deleting todo' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
