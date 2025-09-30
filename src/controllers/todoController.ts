import { Request, Response } from 'express';
import Todo from '../models/Todo';

export const createTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.create({ ...req.body, owner: req.user?.id });
    res.status(201).json(todo);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getTodos = async (req: Request, res: Response) => {
  try {
    const filter = req.user?.role === 'admin' ? {} : { owner: req.user?.id };
    const todos = await Todo.find(filter);
    res.json(todos);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Not found' });
    if (req.user?.role !== 'admin' && String(todo.owner) !== req.user?.id) return res.status(403).json({ message: 'Forbidden' });
    res.json(todo);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Not found' });
    if (req.user?.role !== 'admin' && String(todo.owner) !== req.user?.id) return res.status(403).json({ message: 'Forbidden' });
    Object.assign(todo, req.body);
    await todo.save();
    res.json(todo);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Not found' });
    if (req.user?.role !== 'admin' && String(todo.owner) !== req.user?.id) return res.status(403).json({ message: 'Forbidden' });
    await todo.remove();
    res.json({ message: 'Deleted' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
