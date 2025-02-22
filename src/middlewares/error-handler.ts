import { NextFunction, Request, Response } from "express";
import { CustomAPIError } from "../utils/error";


export const ErrorMiddleware = (err: CustomAPIError, req: Request, res: Response, next: NextFunction) => {
	const statusCode = err.statusCode || 500;
	res.status(statusCode).json({
		status: statusCode,
		error: err.message,
	});
};
