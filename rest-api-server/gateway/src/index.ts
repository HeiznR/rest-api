import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router } from "./routes";
dotenv.config();

const app = express();
app.use(cors());
app.use(router);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server on posrt:${port}`);
});
