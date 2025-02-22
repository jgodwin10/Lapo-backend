import { Request, Response, NextFunction } from "express";
import { CustomAPIError } from "../utils/error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): Response => {
	console.error(err);

	if (err instanceof CustomAPIError && err.statusCode !== 500) {
		return res.status(err.statusCode).send({
			status: "error",
			message: err.message,
		});
	}

	// if the error is not one of the specific types above, return a generic internal server error
	res.status(500).send({ status: "error", message: "Ops, Something went wrong" });
};
