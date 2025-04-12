import { Router } from "express";
const metricRouter = Router();
import { getMetrics } from "../controllers/metrics.controller";

metricRouter.get('/', getMetrics);

export default metricRouter;