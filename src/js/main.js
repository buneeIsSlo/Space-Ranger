import "../sass/main.scss";
import kaboom from "kaboom";

console.log("ohaider");

kaboom({
    width: 400,
    height: 300,
    canvas: document.getElementById("game"),
    scale: 2,
});

const PLAYER_SPEED = 320;

import { loadResources } from "./loadResources";
import { LEVEL, addTiles } from "./levels";
import { patrol, chase } from "./components";


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

    let tranger = add([
        sprite("tranger", { anim: "idle" }),
        layer("game"),
        pos(0, 0),
        body(),
        scale(1.1),
        origin("botleft"),
        // area({ width: 1, offset: vec2(35, 0), }),
        area({ width: 25, height: 40, offset: vec2(0) }),
        state("idle", ["idle", "jump", "run"]),
        {
            isFlipped: false,
            resetArea() {
                console.log(tranger.isFlipped);
                if (tranger.isFlipped) {
                    tranger.area.offset = vec2(40, 0);
                }
                else {
                    tranger.area.offset = vec2(0);
                }
            }
        }
    ])
    console.log(tranger);
    playerMovement(tranger);

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
                const w = tile.width;
                const h = tile.height;
                const [tilePosX, tilePosY] = [tile.pos.x, tile.pos.y];

                // add([
                //     rect(60, 40),
                //     pos(tilePosX, (h / 2) + 40),
                //     area(),
                //     solid(),
                //     color(255, 0, 0),
                //     body(),
                //     origin("center"),
                //     chase(tranger),
                // ])
                add([
                    sprite("crawly", { anim: "crawl" }),
                    // rect(60, 40),
                    pos(tilePosX, (h / 2)),
                    area({ width: 40, height: 30 }),
                    solid(),
                    // area(),
                    body(),
                    origin("center"),
                    chase(tranger),
                    "bot",
                    scale(1.3),
                ])
            }
        },
        {
            name: "shutterTile"
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


function playerMovement(player) {

    onKeyDown("down", () => {
        player.play("die");
    })

    onKeyPress("left", () => {
        player.play("run")
        player.isFlipped = true;
        player.resetArea();
        // player.pos(player.pos.x - 20, player.pos.y);
    })

    onKeyPress("right", () => {
        player.play("run")
        player.isFlipped = false;
        player.resetArea();
    })

    onKeyDown("left", () => {
        player.flipX(true);
        player.move(-PLAYER_SPEED, 0);
    })

    onKeyDown("right", () => {
        player.flipX(false);
        player.move(PLAYER_SPEED, 0);
    })

    onKeyPress("space", () => {
        if (!player.isGrounded()) return;

        player.play("jump");
        player.jump();
        player.enterState("jump");
    });

    onKeyRelease(['left', 'right', 'down', 'up'], () => {
        if (
            !isKeyDown("left")
            && !isKeyDown("right")
            && !isKeyDown("up")
            && !isKeyDown("down")
        ) {
            player.play("idle")
        }
    });

    player.onUpdate(() => {
        // camPos(player.pos);

        // if (player.state === "jump") {
        //     player.play("jump");
        //     console.log("jump mode");
        // };
        let currCam = camPos();
        camPos(player.pos.x, currCam.y);
    });

    player.onStateEnter("jump", () => {
        let checkForLanding = loop(0.3, () => {
            console.log("in loop");

            if (player.isGrounded()) {
                console.log("grounding");

                if (isKeyDown("right") || isKeyDown("left")) {
                    player.play("run");
                    player.enterState("run");
                    console.log("exited loop");
                    checkForLanding();
                }

                else {
                    player.enterState("idle");
                    player.play("idle");
                    checkForLanding();
                }
            }
        })
    });

    player.onCollide("bot", () => {
        addKaboom(player.pos);
        shake(20);
        destroy(player);
    })

}