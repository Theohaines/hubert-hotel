import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use("/static",
    express.static("src/public"),
    express.static("dist/public")
);

app.get("/", async (req, res) => {
    res.sendFile(path.resolve("src/public/pages/game/index.html"));
});

app.listen(process.env.HTTP_PORT, () => {
    console.log(`Server running on port ${process.env.HTTP_PORT}`);
});