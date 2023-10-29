import express, { Request, Response } from "express";
const app = express();

const port = process.env.PORT || 8001;

app.get("/vlad", (req: Request, res: Response) => {
  res.send({ name: "Vlad", age: 24 });
});
app.get("/", (req: Request, res: Response) => {
  res.send({ name: "Users", age: 24 });
});

app.listen(port, () => {
  console.log(`microservice run on posrt:${port}`);
});
