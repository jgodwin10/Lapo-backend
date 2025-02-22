import { Router } from "express";
import UserController from "../controllers/user.controller";


const router: import("express").Router = Router();

router
	.post('/signup', UserController.signup)
	

export default router;
