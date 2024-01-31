const pressedKeys = new Set<string>();

$(window).on("keydown", event => {
    pressedKeys.add(event.key);
});

$(window).on("keyup", event => {
    pressedKeys.delete(event.key);
});