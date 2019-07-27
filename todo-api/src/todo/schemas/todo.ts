import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: String,
});
