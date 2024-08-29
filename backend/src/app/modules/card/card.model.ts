import { model, Schema } from "mongoose";
import { TCard } from "./card.interface";

const cardSchema = new Schema<TCard>({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
});

export const Card = model<TCard>("Card", cardSchema);
