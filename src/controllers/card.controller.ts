import { NextFunction, Request, Response } from "express";
import { CardQuery } from "../query";
import { randomUUID } from "crypto";

export default class CardController {
	static async createCardProfile(req: Request, res: Response, next: NextFunction) {
		/**
		 * Create Card Profile
		 */
		const { name, binPrefix, scheme, expiration, description, currency, branchBlacklist } = req.body;

		try {
			const newCard = await CardQuery.create({
				id: randomUUID(),
				name,
				binPrefix,
				scheme,
				expiration,
				description,
				currency,
				branchBlacklist,
			});

			res.status(201).send({
				status: "success",
				message: "Card Profile Creation successful",
				data: { card: newCard },
			});
		} catch (err) {
			next(err);
		}
	}

	static async getAllCards(_req: Request, res: Response, _next: NextFunction) {
		const allCards = await CardQuery.findAll();

		res.status(200).send({
			status: "success",
			message: "All Cards retrieved successfully",
			data: allCards,
		});
	}
}
