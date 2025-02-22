import { Router } from "express";
import UserController from "../controllers/user.controller";

const router: import("express").Router = Router();

router
	.post("/signup", UserController.signup)
	.post("/login", UserController.login)
	.get('/', UserController.getAllUsers)
	
export default router;
