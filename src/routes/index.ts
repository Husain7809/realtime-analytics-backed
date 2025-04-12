import { Router } from 'express';
import metricRouter from './metrics.route';

const router = Router();

router.use('/metrics', metricRouter);

export default router;
