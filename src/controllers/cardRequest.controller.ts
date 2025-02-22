import { NextFunction, Request, Response } from "express";
import { CardRequestQuery } from "../query";
import { randomUUID } from "crypto";
import { BadRequestError, NotFoundError } from "../utils/error";
import { Status } from "../models";

export default class CardRequestController {
	static async createCardRequest(req: Request, res: Response, next: NextFunction) {
		/**
		 * Create a Card Request
		 */
		const { branchName, cardType, quantity, initiator, cardCharges, batch } = req.body;

		try {
			const newCardRequest = await CardRequestQuery.create({
				id: randomUUID(),
				branchName,
				cardType,
				quantity,
				initiator,
				cardCharges,
				batch,
				dateRequested: new Date(),
			});

			res.status(201).send({
				status: "success",
				message: "Card Request created successfully",
				data: { cardRequest: newCardRequest },
			});
		} catch (err) {
			next(err);
		}
	}

	static async getAllCardRequests(_req: Request, res: Response, _next: NextFunction) {
		/**
		 * Get all Card Requests
		 */
		const allCardRequests = await CardRequestQuery.findAll();

		res.status(200).send({
			status: "success",
			message: "All Card Requests retrieved successfully",
			data: allCardRequests,
		});
	}

	static async updateStatus(req: Request, res: Response) {
		const { id } = req.params;
		const { status } = req.body;

		const cardRequestData = await CardRequestQuery.findById(id);

		if (!cardRequestData) throw new NotFoundError("Card data not found");

		if (Object.values(Status).includes(status)) throw new BadRequestError("not a valid status value");

		const data = await CardRequestQuery.updateInplace(cardRequestData, {
			status: status,
		});

		res.status(200).send({
			status: "success",
			message: "Card Request Status updated successfully",
			data: data,
		});
	}
}
