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
let contact = true;

import { loadResources } from "./loadResources";
import { LEVEL } from "./levels";


loadResources();

scene("main", () => {
    layers([
        "bg",
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
        state("idle", ["jump", "run"], {
            "jump": "idle",
        })
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
        sprite("background", { width: width(), height: height() }),
        layer("bg"),
        pos(0, 0),
        fixed(true),
    ])

    const lvlConf = {
        width: 16,
        height: 16,
        pos: (0, 0),

        "=": () => [
            sprite("floor"),
            layer("game"),
            area(),
            solid(),
            "floor",
            pos(0, height() - 180),
            origin("botleft"),
            "floor"
        ],
    }

    addLevel(LEVEL, lvlConf);

});

go("main");


function playerMovement(player) {

    onKeyDown("down", () => {
        player.play("die");
    })

    onKeyPress(["left", "right"], () => {
        player.play("run", { loop: true });
    })

    onKeyDown("left", () => {
        player.flipX(true);
        player.move(-PLAYER_SPEED, 0);
        // console.log(player.curAnim(), player.flipped);
    })

    onKeyDown("right", () => {
        player.flipX(false);
        player.move(PLAYER_SPEED, 0);
        // console.log(player.curAnim(), player.flipped);
    })

    onKeyPress("space", () => {
        // if (!player.isGrounded()) return;

        player.jump();
        player.play("jump", {
            onEnd: () => {
                player.enterState("jump", "run");
                player.play("idle");
                console.log(player.curAnim());
            },
        });
        // player.onStateTransition("jump", "idle", () => {
        //     player.play("idle");
        // })
    });

    player.onUpdate(() => {
        camPos(player.pos)
    })

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

    // onKeyRelease("space", () => {
    //     if (isKeyDown("left") || isKeyDown("right")) {
    //         player.play("run");
    //     }

    //     player.onCollide("floor", () => {
    //         if (!isKeyDown("left") && !isKeyDown("right")) {
    //             player.play("idle");
    //         }
    //     });
    // });
}