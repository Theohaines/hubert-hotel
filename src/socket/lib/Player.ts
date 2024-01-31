import { Socket } from "socket.io";

class Player {

    client: Socket; 

    id: string;

    room: string = "lobby";
    x: number = 0;
    y: number = 0;

    constructor(client: Socket, id: string) {
        this.client = client;
        this.id = id;
    }

}

export default Player;