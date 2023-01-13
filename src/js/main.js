import "../sass/main.scss";

console.log("ohaider");

import k from "./kaboom";

const {
    add,
    pos,
    text,
    color,
    width,
    height,
    origin,
    go,
    play,
    wait,
    time,
    opacity,
    sprite,
    outline,
    layer,
    layers,
    fixed
} = k

import { loadResources } from "./loadResources";
import { LEVEL, addTiles } from "./levels";
import { patrol, chase } from "./components";
import { addCrawler, addStinger } from "./entities/enimies"
import { ranger } from "./entities/ranger";


loadResources();
// debug.inspect = true;

scene("main", () => {
    layers([
        "bg0",
        "bg",
        "tile",
        "game",
        "foreground",
    ], "game");

    gravity(2400);

    const tranger = ranger()

    add([
        text("I eat hearts", { size: 24, font: "sink" }),
        pos(center()),
        origin("center"),
        outline(6),
        color([255, 0, 0])
    ])

    add([
        sprite("background", { width: width(), height: height(), tiled: true }),
        layer("bg"),
        pos(0, 0),
        fixed(true),
    ])

    add([
        sprite("fullbg", { width: width(), height: height() }),
        layer("bg0"),
        pos(0, 0),
        fixed(true),
    ])

    addTiles([
        {
            name: "plainTile",
            onAdded: (tile) => {
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                const w = tile.width;
                const h = tile.height;

                // const block = add([
                //     rect(40, 40),
                //     pos(w / 2, (h / 2) + 40),
                //     area(),
                //     solid(),
                //     color(0, 255, 0),
                //     body(),
                //     origin("center"),
                // ]);

                // add([
                //     sprite("floor", { height: 50 }),
                //     pos(w / 2, height() - 150),
                //     area(),
                //     solid(),
                //     origin("bot"),
                //     scale(2),
                // ])
            }
        },
        {
            name: "plainTile"
        },
        {
            name: "pillarTile"
        },
        {
            name: "lockedTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                addCrawler(vec2(tilePosX, h / 2), tranger);
                addStinger(vec2(tilePosX, h / 4), tranger);
            }
        },
        {
            name: "shutterTile"
        },
        {
            name: "holeTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                addCrawler(vec2(tilePosX, h / 2), tranger);
                addCrawler(vec2(tilePosX + w, h / 2), tranger);
            }
        },
        {
            name: "plainTile"
        },
        {
            name: "plainTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                addCrawler(vec2(tilePosX, h / 2), tranger);
            }
        },
        {
            name: "pillarTile"
        },
        {
            name: "lockedTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                addCrawler(vec2(tilePosX, h / 2), tranger);
            }
        },
        {
            name: "shutterTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                addCrawler(vec2(tilePosX + w, h / 2), tranger);
            }
        },
        {
            name: "holeTile"
        },
        {
            name: "plainTile"
        },
        {
            name: "plainTile"
        },
        {
            name: "pillarTile"
        },
        {
            name: "lockedTile"
        },
        {
            name: "shutterTile"
        },
        {
            name: "exitTile"
        }
    ])
});


go("main");