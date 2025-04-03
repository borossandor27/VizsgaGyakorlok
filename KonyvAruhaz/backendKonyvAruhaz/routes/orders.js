import express from 'express';
import { createOrder, getOrdersByUser } from '../controllers/ordersController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Token ellenőrzés mindkét rendelés végpont előtt
router.post('/', verifyToken, createOrder);
router.get('/:userId', verifyToken, getOrdersByUser);

export default router;
