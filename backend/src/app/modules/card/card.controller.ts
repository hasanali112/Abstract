import { RequestHandler } from "express";
import { CardService } from "./card.service";

const createCardIntoDB: RequestHandler = async (req, res) => {
  try {
    const cardData = req.body;
    const result = await CardService.createCard(cardData);
    res.status(200).json({
      success: true,
      message: "Card create successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getCardIntoDB: RequestHandler = async (req, res) => {
  try {
    const result = await CardService.getCard();
    res.status(200).json({
      success: true,
      message: "Card get successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

const getCardByIdIntoDB: RequestHandler = async (req, res) => {
  try {
    const title = req.params.title;
    const result = await CardService.getCardById(title);
    res.status(200).json({
      success: true,
      message: "Single Card get successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export const CardController = {
  createCardIntoDB,
  getCardIntoDB,
  getCardByIdIntoDB,
};
