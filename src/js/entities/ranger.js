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
    const PLAYER_SPEED = 280;
    const BULLET_SPEED = 420;

    let tranger = add([
        sprite("tranger", { anim: "idle" }),
        layer("game"),
        pos(0, 0),
        body(),
        scale(1.1),
        origin("botleft"),
        area({ width: 25, height: 40, offset: vec2(0) }),
        state("idle", ["idle", "jump", "run"]),
        {
            isFlipped: false,

            offsetArea() {
                if (tranger.isFlipped) {
                    tranger.area.offset = vec2(40, 0);
                }
                else {
                    tranger.area.offset = vec2(0);
                }
            },

            areaHeightTo(val) {
                tranger.area.height = val;
                if (!tranger.isGrounded())
                    tranger.area.offset.y = -25;
                else
                    tranger.area.offset.y = 0;
            }
        }
    ])

    // tranger.jumpForce = 800;

    console.log(tranger);
    playerMovement(tranger);

    function playerMovement(player) {

        onKeyDown("down", () => {
            player.play("die");
        })

        onKeyPress("left", () => {
            if (isKeyDown("right")) {
                return;
            }

            player.isFlipped = true;
            player.offsetArea();

            if (player.state === "jump") {
                player.areaHeightTo(30);
                return;
            }

            player.play("run");
        })

        onKeyPress("right", () => {
            if (isKeyDown("left")) {
                return;
            }

            player.isFlipped = false;
            player.offsetArea();

            if (player.state === "jump") {
                player.areaHeightTo(30);
                return;
            }

            player.play("run");
        })

        onKeyDown("left", () => {
            moveLeft(player);
        })

        onKeyDown("right", () => {
            moveRight(player);
        })

        onKeyPress("space", () => {
            if (!player.isGrounded()) return;

            player.play("jump");
            player.jump();
            player.enterState("jump");
            player.areaHeightTo(30);
        });

        onKeyPress("enter", () => {
            spawnBullet(player.pos);
            destroyAll("bot");
        })

        onKeyRelease(['left', 'right', 'down', 'up'], () => {
            if (
                !isKeyDown("left")
                && !isKeyDown("right")
                && !isKeyDown("up")
                && !isKeyDown("down")
                && player.isGrounded()
            ) {
                console.log(player.state);
                player.enterState("idle");
                player.play("idle");
            }
        });

        player.onUpdate(() => {
            // camPos(player.pos);

            let currCam = camPos();
            // camPos(player.pos.x, currCam.y);
            const from = camPos().x
            const to = Math.max(player.pos.x + player.width / 2 + (player.isFlipped ? -60 : 60))
            const dir = vec2(from + Math.sign(to - from) * Math.min(Math.abs(to - from), 1.5 * PLAYER_SPEED * dt()), currCam.y);
            camPos(dir.x < 200 ? 200 : dir.x, dir.y);
            // camScale(0.5);
        });

        player.onStateEnter("jump", () => {
            let checkForLanding = loop(0.1, () => {
                console.log("in loop");

                if (player.isGrounded()) {
                    console.log("grounding");
                    player.offsetArea();
                    player.areaHeightTo(40);

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

        player.onCollide("bot", (e) => {
            // addKaboom(player.pos);
            player.play("die");
            shake(20);
            // destroy(player);
            // destroy(e);
        })

    }

    function moveLeft(player) {
        if (isKeyDown("right")) return;


        player.flipX(true);
        player.isFlipped = true;
        player.move(-PLAYER_SPEED, 0);
        if (player.isGrounded()) player.enterState("run");
    }

    function moveRight(player) {
        if (isKeyDown("left")) return;

        player.flipX(false);
        player.isFlipped = false;
        player.move(PLAYER_SPEED, 0);
        if (player.isGrounded()) player.enterState("run");
    }

    function spawnBullet(p) {
        const bullet = add([
            rect(18, 10),
            area(),
            pos(p.x + 40, p.y - 30),
            origin("center"),
            color(127, 127, 255),
            move(tranger.isFlipped ? LEFT : RIGHT, BULLET_SPEED),
            cleanup(),
            "bullet",
        ])
    }

    return tranger;
}