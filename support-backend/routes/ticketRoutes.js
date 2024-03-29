import express from 'express';
const router = express.Router()
import {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
} from '../controllers/ticketController.js'
import protect from '../middleware/authMiddleware.js';

// Re-route into note router
import {noteRoutes} from './noteRoutes.js'
router.use('/:ticketId/notes', noteRoutes)

router.route('/').get(protect, getTickets).post(protect, createTicket)

router
  .route('/:id')
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket)



  export { router as ticketRoutes };