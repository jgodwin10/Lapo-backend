import { Router } from "express";
import CardRequestController from "../controllers/cardRequest.controller";

const router: import("express").Router = Router();

router
    .post('/create', CardRequestController.createCardRequest)
    .get('/', CardRequestController.getAllCardRequests)
    .patch('/update:id', CardRequestController.updateStatus)
    
export default router;
