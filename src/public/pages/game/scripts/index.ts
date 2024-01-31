const game = $<HTMLCanvasElement>(".game-space").get(0)?.getContext("2d")!;

const players = [
    new Player("hoobert", "#ff0000"),
    new Player("huberto", "#0000ff")
];

players[1].x = 300;
players[1].y = 300;

setInterval(() => {

    game.clearRect(0, 0, 1280, 720);

    for (const player of players) {
        game.fillStyle = player.colour;
        game.fillRect(player.x, player.y, 100, 100);
    }

    if (pressedKeys.has("w")) {
        players[0].y -= 2;
    }
    if (pressedKeys.has("a")) {
        players[0].x -= 2;
    }
    if (pressedKeys.has("s")) {
        players[0].y += 2;
    }
    if (pressedKeys.has("d")) {
        players[0].x += 2;
    }

}, 10);