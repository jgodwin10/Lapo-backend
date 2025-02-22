import { Router } from "express";
import userRouter from './user.route'

const router: import("express").Router = Router();

router
	.use("/user", userRouter)
	

export default router;
