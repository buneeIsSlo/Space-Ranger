import k from "../kaboom";

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
    action,
    time,
    lerp,
    opacity,
    dt,
    sprite,
    outline,
    layer,
    layers,
    fixed
} = k

export const ranger = () => {
    const PLAYER_SPEED = 320;

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

        // player.onCollide("bot", () => {
        //     addKaboom(player.pos);
        //     shake(20);
        //     destroy(player);
        // })

    }

    return tranger;
}