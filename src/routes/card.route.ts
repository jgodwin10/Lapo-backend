import { Router } from "express";
import CardController from "../controllers/card.controller";

const router: import("express").Router = Router();

router
    .post('/create', CardController.createCardProfile)
    .get('/', CardController.getAllCards)
    
export default router;
