import { Router } from "express";
import CardController from "../controllers/card.controller";

const router: import("express").Router = Router();

router
	/**
	 * @swagger
	 * /api/v1/card/create:
	 *   post:
	 *     summary: Create a new card profile
	 *     description: Add a new card profile to the system.
	 *     tags:
	 *       - Card Profile
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *                 example: "Visa Gold"
	 *               binPrefix:
	 *                 type: string
	 *                 example: "123456"
	 *               scheme:
	 *                 type: string
	 *                 example: "Visa"
	 *     responses:
	 *       201:
	 *         description: Card Profile created successfully
	 */
	.post("/create", CardController.createCardProfile)

	/**
	 * @swagger
	 * /api/v1/card:
	 *   get:
	 *     summary: Get all cards
	 *     description: Retrieve a list of all card profiles.
	 *     tags:
	 *       - Card Profile
	 *     responses:
	 *       200:
	 *         description: Successfully retrieved all cards
	 */
	.get("/", CardController.getAllCards);

export default router;
