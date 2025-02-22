import { Router } from "express";
import userRouter from "./user.route";
import cardRouter from "./card.route";
import cardRequestRouter from "./cardRequests.route";

const router: import("express").Router = Router();

router
    .use("/user", userRouter)
    .use("card", cardRouter)
    .use('card/request', cardRequestRouter)

export default router;
