import dbConnect from '../../lib/mongodb';
import User from '../../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const { username, email, password } = req.body;

        // Перевірка наявності користувача з таким email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Хешування паролю
        const hashedPassword = await bcrypt.hash(password, 10);

        // Створення нового користувача
        const user = new User({
          username,
          email,
          password: hashedPassword,
        });

        // Збереження користувача у базі даних
        await user.save();

        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
