import { TCard } from "./card.interface";
import { Card } from "./card.model";

const createCard = async (payload: TCard) => {
  const result = await Card.create(payload);
  return result;
};

const getCard = async (title?: string) => {
  let query: any = {};

  if (title) {
    query.title = { $regex: title, $options: "i" };
  }

  const result = await Card.find(query);
  return result;
};

const getCardById = async (title: string) => {
  const result = await Card.findOne({ title: title });
  return result;
};

export const CardService = {
  createCard,
  getCard,
  getCardById,
};
