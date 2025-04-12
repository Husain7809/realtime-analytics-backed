import { Request, Response } from "express";
import { catchAsyncError } from "../utils/catchAsyncWrapper";
import { generateMockData } from "../utils/mockData";

export const getMetrics = catchAsyncError(
    async (req: Request, res: Response): Promise<object> => {
        const data = generateMockData();
        return res.json(data);
    }
);