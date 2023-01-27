import k from "../kaboom";
import { addTiles } from "../levels";
import { addCrawler, addStinger } from "../entities/enemies";
import { addRanger } from "../entities/ranger";
import { addServers, addTerminal, addOrb } from "../entities/props";
import { addBackdrop } from "../ui/backDrop";

export default () => {
    const {
        add,
        pos,
        width,
        height,
        origin,
        go,
        wait,
        opacity,
        sprite,
        layer,
        layers,
        fixed
    } = k;

    // debug.inspect = true;
    // debug.timeScale = 0.2;

    layers([
        "bg0",
        "bg",
        "tile",
        "game",
        "foreground",
        "ui"
    ], "game");

    gravity(2400);

    const ranger = addRanger();

    add([
        sprite("labbg", { width: width(), height: height() }),
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
        },
        {
            name: "plainTile",
            onAdded: (tile) => {
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                const w = tile.width;
                const h = tile.height;

                addOrb(vec2(tilePosX + (w / 2), h / 2));
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

                addCrawler(vec2(tilePosX, h), ranger);
            }
        },
        {
            name: "shutterTile",
            onAdded: (tile) => {
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                const w = tile.width;
                const h = tile.height;

                addOrb(vec2(tilePosX + (w / 2), h / 2));
            }
        },
        {
            name: "holeTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];

                addCrawler(vec2(tilePosX, h / 2), ranger);
                addStinger(vec2(tilePosX + (w / 2) + 100, h / 4), ranger);
            }
        },
        {
            name: "plainTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];
                const [orbPosX, orbPosY] = [tilePosX + (w / 2), h / 4]

                addServers(vec2(tilePosX, h / 2));
                addTerminal(vec2(tilePosX + w / 2, 240));
                addOrb(vec2(orbPosX, orbPosY));
                addOrb(vec2(orbPosX - 50, orbPosY + 30));
                addOrb(vec2(orbPosX + 50, orbPosY + 30));
            }
        },
        {
            name: "plainTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];

                addCrawler(vec2(tilePosX + w / 2, h / 2), ranger);
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

                addCrawler(vec2(tilePosX, h / 2), ranger);

            }
        },
        {
            name: "shutterTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];

                addCrawler(vec2(tilePosX + w, h / 2), ranger);
                addOrb(vec2(tilePosX + (w / 2), h / 2));
            }
        },
        {
            name: "holeTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];

                addStinger(vec2(tilePosX + w, h / 4), ranger);
                addCrawler(vec2(tilePosX + w, h), ranger);
                addOrb(vec2(tilePosX + (w - 200), h / 2));
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
                const [orbPosX, orbPosY] = [tilePosX + (w / 2), h / 4]

                addServers(vec2(tilePosX, h / 2));
                addTerminal(vec2(tilePosX + w / 2, 240));
                addOrb(vec2(orbPosX, orbPosY));
                addOrb(vec2(orbPosX - 50, orbPosY + 30));
                addOrb(vec2(orbPosX + 50, orbPosY + 30));

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

                addStinger(vec2(tilePosX, h / 4), ranger);
                addStinger(vec2(tilePosX + (w / 2) + 100, h / 4), ranger);

                addOrb(vec2(tilePosX, h - 40));
                addOrb(vec2(tilePosX + (w / 2), h - 40));
                addOrb(vec2(tilePosX + w, h / 2));
            }
        },
        {
            name: "shutterTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];

                addStinger(vec2(tilePosX + w, h / 4), ranger);
                addOrb(vec2(tilePosX + (w / 2), h / 2));
                addOrb(vec2(tilePosX + w, h - 40));
            }
        },
        {
            name: "exitTile",
            onAdded: (tile) => {
                const [w, h] = [tile.width, tile.height];
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];

                const exit = add([
                    rect(1, height()),
                    pos(tilePosX + (w / 2), h),
                    area(),
                    origin("botleft"),
                    layer("game"),
                    opacity(0),
                    "exit",
                ]);

                exit.onCollide("ranger", () => {
                    addBackdrop(2, 0, 1);
                    wait(2, () => go("end"));
                });
            }
        }
    ])

}