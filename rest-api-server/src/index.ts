import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/api", (req: Request, res: Response) => {
  res.json({ name: "Vlad", age: 24 });
});

app.listen(port, () => {
  console.log(`server on posrt:${port}`);
});
