declare function io(uri: string): any;

const game = $<HTMLCanvasElement>(".game-space").get(0)?.getContext("2d")!;
const socket = io("ws://localhost:8081");

let authID: string | null = null;
const players: Player[] = [];

socket.on("check_in", (id: string) => {
    authID = id;
});

socket.on("move", (username: string, x: number, y: number) => {
    const clientPlayer = players.find(player => player.username == username);

    if (clientPlayer) {
        clientPlayer.x = x;
        clientPlayer.y = y;
    } else {
        players.push(new Player(username, x, y));
    }
});

setInterval(() => {
    if (pressedKeys.has("w")) {
        
    }
}, 10);