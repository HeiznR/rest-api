import express from "express";
const users = express();
const port = process.env.PORT || 8002;
users.use("/", (req, res) => {
    return res.json({ name: "Product", age: 24 });
});
users.listen(port, () => {
    console.log(`microservice run on posrt:${port}`);
});
//# sourceMappingURL=index.js.map