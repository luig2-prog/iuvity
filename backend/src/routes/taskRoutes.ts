import { Router } from 'express';
import { 
  getAllTasks, 
  getTaskById, 
  createTask, 
  updateTask, 
  deleteTask 
} from '../controllers/taskController';

const router = Router();

router.get('/', getAllTasks);

router.get('/:id', getTaskById);

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

export { router as taskRouter };
