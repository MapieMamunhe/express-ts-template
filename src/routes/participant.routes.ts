import { Router, Request, Response } from 'express';
import * as controller from '../controllers/participant.controller';
const router = Router();

// Define a GET route
router.get('/', controller.getParticipants);

// Define a POST route with typed body (optional)
router.post('/register', controller.createParticipant);

// Define a PUT route with typed body (optional)
router.put('/', controller.updateParticipant);

// Define a DELETE route with typed body (optional)
router.delete('/', controller.deleteParticipant);

export default router ;
