import { NextFunction, Request, Response } from "express";
export const catchAsyncError =
    (handler) =>
        (req: Request, res: Response, next: NextFunction) => {
            Promise.resolve(handler(req, res, next)).catch((err) => {
                next(err);
            });
        };
