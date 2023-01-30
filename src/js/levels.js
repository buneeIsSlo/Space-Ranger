export const addTiles = (tiles) => {
    let prevWidths = 0;

    tiles.forEach((tile) => {
        const back = add([
            sprite(tile.name, { height: height() }),
            layer("tile"),
        ]);

        const w = back.width;
        back.pos = vec2((prevWidths), 0);

        add([
            rect(w, 40),
            pos((prevWidths), height() - 20),
            area(),
            solid(),
            opacity(0),
            "killStone",
        ]);

        prevWidths += w;

        if (typeof tile.onAdded !== "undefined") {
            tile.onAdded(back);
        }
    });
};