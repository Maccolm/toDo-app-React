const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 6001;

// Дозвіл CORS для конкретного домену
app.use(cors({
  origin: 'https://to-do-app-gold-iota.vercel.app', // Дозволений домен
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Дозволені методи
  allowedHeaders: ['Content-Type', 'Authorization'] // Дозволені заголовки
}));

// Парсинг JSON-тіл запитів
app.use(express.json());

// Маршрути для вашого API
app.get('/api/todos', (req, res) => {
  res.json({ message: 'Отримання списку todo' });
});

app.post('/api/todos', (req, res) => {
  res.json({ message: 'Додавання нового todo' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
