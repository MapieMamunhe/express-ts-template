import { Router, Request, Response } from 'express';
import * as controller from '../controllers/user.controller';
const router = Router();

// Define a GET route
router.get('/', controller.getUsers);

// Define a POST route with typed body (optional)
router.post('/', controller.createUser);

// Define a PUT route with typed body (optional)
router.put('/', controller.updateUser);

// Define a DELETE route with typed body (optional)
router.delete('/', controller.deleteUser);

export default router ;
