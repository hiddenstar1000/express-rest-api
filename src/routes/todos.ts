import { Router } from 'express';
import { createTodo, getTodos, getTodo, updateTodo, deleteTodo } from '../controllers/todoController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.use(authenticate);

router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id', getTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
