import dbConnect from '../../lib/mongodb';
import Todo from '../../models/Todo';

export default async function handler(req, res) {
  const { method } = req;
  const { userId, id } = req.query;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        if (!userId) {
          return res.status(400).json({ success: false, message: 'userId is required' });
        }
        const todos = id ? await Todo.findOne({ _id: id, userId }) : await Todo.find({ userId });
        res.status(200).json(todos);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const todo = await Todo.create(req.body);
        res.status(201).json({ success: true, data: todo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const todo = await Todo.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!todo) {
          return res.status(404).json({ success: false, message: 'Todo not found' });
        }
        res.status(200).json({ success: true, data: todo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedTodo = await Todo.deleteOne({ _id: id, userId });
        if (!deletedTodo) {
          return res.status(404).json({ success: false, message: 'Todo not found' });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
