import { Router, Request, Response } from 'express';
import * as controller from '../controllers/evento.controller';
const router = Router();

// Define a GET route
router.get('/', controller.getEventos);

// Define a POST route with typed body (optional)
router.post('/', controller.createEvento);

// Define a PUT route with typed body (optional)
router.put('/', controller.updateEvento);

// Define a DELETE route with typed body (optional)
router.delete('/', controller.deleteEvento);

export default router ;