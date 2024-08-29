import { Router } from "express";
import { CardController } from "./card.controller";

const routes = Router();

routes.post("/cards", CardController.createCardIntoDB);

routes.get("/cards", CardController.getCardIntoDB);

routes.get("/cards/:title", CardController.getCardByIdIntoDB);

export const CardRoute = routes;
