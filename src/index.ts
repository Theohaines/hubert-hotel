import express from "express";
import socketio from "socket.io";
import uuid from "uuid";
import path from "path";
import dotenv from "dotenv";
dotenv.config();

import Player from "./socket/lib/Player";

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

const socketServer = new socketio.Server(parseInt(process.env.SOCKET_PORT ?? "8086"), {
    cors: {
        origin: "*"
    }
});

export const players: Player[] = [];

socketServer.on("connection", client => {

    const id = uuid.v4();

    players.push(
        new Player(client, id)
    );

    client.emit("check_in", id);

});