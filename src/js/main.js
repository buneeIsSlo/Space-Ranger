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
import { addCrawler, addStinger } from "./entities/enemies"
import { ranger } from "./entities/ranger";
import { addServers, addTerminal } from "./entities/props";


loadResources();
// debug.inspect = true;

scene("main", () => {
    layers([
        "bg0",
        "bg",
        "tile",
        "game",
        "foreground",
        "ui"
    ], "game");

    gravity(2400);

    const tranger = ranger()

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

    add([
        rect(100, height()),
        pos(-100, 0),
        area(),
        solid(),
        layer("tile"),
        opacity(0),
        "barricade"
    ])

    addTiles([
        {
            name: "plainTile",
            onAdded: (tile) => {
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                const w = tile.width;
                const h = tile.height;
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
                addCrawler(vec2(tilePosX, h), tranger);
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
            }
        },
        {
            name: "plainTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                addServers(vec2(tilePosX, h / 2));
                addTerminal(vec2(tilePosX + w / 2, 240));
            }
        },
        {
            name: "plainTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                addCrawler(vec2(tilePosX + w / 2, h / 2), tranger);
                addServers(vec2(tilePosX, h / 2));

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
            name: "holeTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                addStinger(vec2(tilePosX + w, h / 4), tranger);
                addCrawler(vec2(tilePosX + w, h), tranger);
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
                addServers(vec2(tilePosX, h / 2));
                addTerminal(vec2(tilePosX + w / 2, 240));

            }
        },
        {
            name: "pillarTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                addServers(vec2(tilePosX, h / 2));
            }
        },
        {
            name: "lockedTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                addStinger(vec2(tilePosX, h / 4), tranger);
            }
        },
        {
            name: "shutterTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                addStinger(vec2(tilePosX + w, h / 4), tranger);
            }
        },
        {
            name: "exitTile"
        }
    ])
});


go("main");