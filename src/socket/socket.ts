import socketio from "socket.io";
import uuid from "uuid";

const server = new socketio.Server(parseInt(process.env.SOCKET_PORT ?? "8086"));

server.on("connection", client => {



});