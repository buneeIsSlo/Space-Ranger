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
import { LEVEL } from "./levels";


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
        area({ width: 1, offset: vec2(35, 0), }),
        state("idle", ["idle", "jump", "run"]),
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

    for (let i = 0; i < 7; i++) {
        const back = add([
            sprite("cori", { height: height() }),
            layer("tile"),
        ]);

        const w = back.width;
        back.pos = vec2((i * w), 0);

        add([
            rect(w, 40,),
            pos((i * w), height() - 20),
            area(),
            solid(),
            outline(2, BLUE),
            // opacity(0),
        ])
    }

    const lvlConf = {
        width: 16,
        height: 16,
        pos: vec2(0, 0),

        // "=": () => [
        //     sprite("floor"),
        //     layer("game"),
        //     area(),
        //     solid(),
        //     origin("bot"),
        //     outline(2),
        //     pos(vec2(0, 0)),
        //     "floor",
        // ],
    }

    addLevel(LEVEL, lvlConf);

});


go("main");


function playerMovement(player) {

    onKeyDown("down", () => {
        player.play("die");
    })

    onKeyPress(["left", "right"], () => {
        player.play("run");
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

}