import { Schema, model, Types } from 'mongoose';

interface ITodo {
  title: string;
  description?: string;
  completed?: boolean;
  owner?: Types.ObjectId;
}

const todoSchema = new Schema<ITodo>({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default model<ITodo>('Todo', todoSchema);
