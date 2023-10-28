import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
dotenv.config();
app.use(cors());
const port = process.env.PORT || 5000;

app.use("/users", createProxyMiddleware({ target: "http://localhost:8001" })); //users
app.use("/", createProxyMiddleware({ target: "http://localhost:8002" })); //products

app.listen(port, () => {
  console.log(`server on posrt:${port}`);
});
