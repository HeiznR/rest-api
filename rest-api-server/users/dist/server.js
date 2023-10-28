import express from "express";
const users = express();
const port = process.env.PORT || 5001;
users.get("/vlad", (req, res) => {
    res.json({ name: "Vlad", age: 24 });
});
users.listen(port, () => {
    console.log(`microservice run on posrt:${port}`);
});
//# sourceMappingURL=server.js.map