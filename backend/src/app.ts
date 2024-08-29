import express, { Application, Request, Response } from "express";
import cors from "cors";
import { CardRoute } from "./app/modules/card/card.routes";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/POST", CardRoute);
app.use("/GET", CardRoute);

app.get("/GET/ping", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Abstract app running successfully",
  });
});

export default app;
