import { Router } from "express";
import UserController from "../controllers/user.controller";

const router: import("express").Router = Router();

router
	/**
	 * @swagger
	 * /user/signup:
	 *   post:
	 *     summary: Register a new user
	 *     description: Creates a new user account.
	 *     tags: [Auth]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               firstname:
	 *                 type: string
	 *               lastname:
	 *                 type: string
	 *               email:
	 *                 type: string
	 *               password:
	 *                 type: string
	 *     responses:
	 *       201:
	 *         description: User registered successfully
	 *       400:
	 *         description: Validation error
	 */
	.post("/signup", UserController.signup)
	/**
	 * @swagger
	 * /auth/login:
	 *   post:
	 *     summary: User login
	 *     description: Authenticates a user and returns a JWT token.
	 *     tags: [Auth]
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               email:
	 *                 type: string
	 *               password:
	 *                 type: string
	 *     responses:
	 *       200:
	 *         description: Login successful
	 *       401:
	 *         description: Invalid credentials
	 */
	.post("/login", UserController.login)
	/**
	 * @swagger
	 * /user:
	 *   get:
	 *     summary: Get all Users
	 *     tags: [User]
	 *     responses:
	 *       200:
	 *         description: List of all Users
	 */
	.get("/", UserController.getAllUsers);
	
export default router;
