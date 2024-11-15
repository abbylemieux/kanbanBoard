import { Router } from 'express';
import authRoutes from './auth-routes';
import apiRoutes from './api/index.js';
import { authenticateToken } from '../middleware/auth'; // Update with the actual path to your auth middleware

const router = Router();

router.use('/auth', authRoutes);

// Protect the `/api` routes with the `authenticateToken` middleware
router.use('/api', authenticateToken, apiRoutes);

export default router;
