import express, { Request, Response } from "express";
import proxy from "express-http-proxy";
const router = express.Router();

router.use("/users", proxy("http://localhost:8001")); //users
router.use("/products", proxy("http://localhost:8002")); //products
router.get("/asdf", (req: Request, res: Response) => {
  res.json({ name: "vlad" });
}); //products

export { router };
