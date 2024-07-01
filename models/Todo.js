import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  task: {
    type: String,
    required: [true, 'Please provide a task'],
  },
  day: {
    type: String,
    required: [true, 'Please provide a day'],
  },
  done: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
