import express from "express";
const users = express();
const port = process.env.PORT || 8001;
users.use("/", (req, res) => {
    return res.json({ name: "Users", age: 24 });
});
users.listen(port, () => {
    console.log(`microservice run on posrt:${port}`);
});
//# sourceMappingURL=index.js.map