declare function io(uri: string): any;

const game = $<HTMLCanvasElement>(".game-space").get(0)?.getContext("2d")!;
const socket = io("ws://localhost:8081");

socket.on("check_in", (id: string) => {
    console.log(`Yes, ${id}`);
});