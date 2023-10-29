import express, { Request, Response } from "express";
const app = express();

const port = process.env.PORT || 8002;

app.get("/vlad", (req: Request, res: Response) => {
  res.json({ name: "Product1", age: 25 });
});
app.get("/", (req: Request, res: Response) => {
  res.json({ name: "Product", age: 24 });
});

app.listen(port, () => {
  console.log(`microservice run on posrt:${port}`);
});
