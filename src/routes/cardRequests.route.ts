import { Router } from "express";
import CardRequestController from "../controllers/cardRequest.controller";

const router: import("express").Router = Router();

router
	/**
	 * @swagger
	 * /card/request/create:
	 *   post:
	 *     summary: Create a new card request
	 *     tags: [Card Request]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               userId:
	 *                 type: string
	 *               cardType:
	 *                 type: string
	 *     responses:
	 *       201:
	 *         description: Card request created
	 */
	.post("/create", CardRequestController.createCardRequest)
	/**
	 * @swagger
	 * /card/request:
	 *   get:
	 *     summary: Get all card requests
	 *     tags: [Card Request]
	 *     responses:
	 *       200:
	 *         description: List of all card requests
	 */
	.get("/", CardRequestController.getAllCardRequests)
	/**
	 * @swagger
	 * /card/request/{id}:
	 *   patch:
	 *     summary: Update card request status
	 *     tags: [Card Request]
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: Card request ID
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               status:
	 *                 type: string
	 *                 enum: [Pending, In Progress, Ready, Dispatched, Acknowledged]
	 *     responses:
	 *       200:
	 *         description: Card request updated successfully
	 */
	.patch("/update:id", CardRequestController.updateStatus);
    
export default router;
