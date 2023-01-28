import k from "../kaboom";
import { playLabMusic, stopLabMusic } from "../music";
import { addBackdrop } from "../ui/backDrop";
import { showEndScreen } from "../ui/endScreen";
import { addOrbCount } from "../ui/orbs";

const {
    add,
    pos,
    color,
    origin,
    play,
    dt,
    sprite,
    layer,
} = k;

export const addRanger = () => {
    const PLAYER_SPEED = 280;
    const BULLET_SPEED = 420;
    playLabMusic();

    let ranger = add([
        sprite("ranger", { anim: "idle" }),
        layer("game"),
        pos(0, 0),
        body(),
        scale(1.1),
        origin("botleft"),
        area({ width: 25, height: 35, offset: vec2(0) }),
        state("idle", ["idle", "jump", "run"]),
        "killStone",
        "ranger",

        {
            isFlipped: false,
            isDead: false,

            offsetArea() {
                if (ranger.isFlipped) {
                    ranger.area.offset = vec2(40, 0);
                }
                else {
                    ranger.area.offset = vec2(0);
                }
            },

            areaHeightTo(val) {
                ranger.area.height = val;
                if (!ranger.isGrounded())
                    ranger.area.offset.y = -25;
                else
                    ranger.area.offset.y = 0;
            },

            die() {
                if (ranger.isDead) return;

                ranger.origin = "topleft";
                ranger.isDead = true;
                ranger.play("die");
                shake();

                addBackdrop(1, 0, 0.5);
                showEndScreen();

                stopLabMusic();
                play("dies", { volume: 0.7 });

                onKeyPress(",", () => {
                    destroyAll("endScr");
                    ranger.paused = false;
                });
            }
        }
    ]);

    console.log(ranger);
    playerMovement(ranger);
    let orbCount = addOrbCount();

    onKeyPress("enter", () => {
        if (!ranger.isDead);
        spawnBullet(ranger.pos);
        // destroyAll("bot");
        ranger.isDead = false;
    })

    function playerMovement(player) {

        onKeyPress(["left", "a"], () => {

            if (isKeyDown("right") || isKeyDown("d") || player.isDead) return;

            player.isFlipped = true;
            player.offsetArea();

            if (player.state === "jump") {
                player.areaHeightTo(30);
                return;
            }

            player.play("run");
        })

        onKeyPress(["right", "d"], () => {
            if (isKeyDown("left") || isKeyDown("a") || player.isDead) return;

            player.isFlipped = false;
            player.offsetArea();

            if (player.state === "jump") {
                player.areaHeightTo(30);
                return;
            }

            player.play("run");
            console.log(player.curPlatform());
        })

        onKeyDown(["left", "a"], () => {
            if (player.isDead) return;
            moveLeft(player);
        })

        onKeyDown(["right", "d"], () => {
            if (player.isDead) return;
            moveRight(player);
        })

        onKeyPress(["space", "w", "up"], () => {
            if (!player.isGrounded() || player.isDead) return;

            player.play("jump");
            player.jump();
            player.enterState("jump");
            player.areaHeightTo(30);
        });

        onKeyRelease(['left', 'right', "a", "d"], () => {
            if (player.isDead) return;

            if (!player.isGrounded() && player.state !== "jump") {
                player.enterState("idle");
                player.play("idle");
                return;
            }

            if (
                !isKeyDown("left")
                && !isKeyDown("right")
                && !isKeyDown("up")
                && !isKeyDown("down")
                && !isKeyDown("a")
                && !isKeyDown("d")
                && player.isGrounded()
            ) {
                player.offsetArea();
                console.log(player.state);
                player.enterState("idle");
                player.play("idle");
            }
        });

        player.onUpdate(() => {
            let currCam = camPos();
            const from = currCam.x
            const to = Math.max(player.pos.x + player.width / 2 + (player.isFlipped ? -60 : 60))
            const dir = vec2(from + Math.sign(to - from) * Math.min(Math.abs(to - from), 1.5 * PLAYER_SPEED * dt()), currCam.y);
            camPos(dir.x < 200 ? 200 : dir.x, dir.y);
            // camScale(0.5);
        });

        player.onStateEnter("jump", () => {
            let i = 0;

            let checkForLanding = loop(0.1, () => {

                /* 
                    Due to frame hitches this loop may wind up running infinitely.
                    The 2 lines of code below will prevent that from happening.
                */
                i += 1;
                if (i >= 20) checkForLanding();

                if (player.isGrounded()) {
                    if (player.isDead) {
                        checkForLanding();
                        return;
                    }

                    player.offsetArea();
                    player.areaHeightTo(35);

                    if (isKeyDown("right")
                        || isKeyDown("left")
                        || isKeyDown("d")
                        || isKeyDown("a")
                    ) {
                        player.play("run");
                        player.enterState("run");
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

        player.onCollide("danger", () => {
            player.die();
        });

        player.onCollide("orb", (orb) => {
            destroy(orb);
            play("pickedOrb", { volume: 1 });
            orbCount.text = Number(orbCount.text) + 1;
        })

        player.onAnimEnd("die", () => {
            player.pause = true;
        })

    }

    function moveLeft(player) {
        if (isKeyDown("right") || isKeyDown("d")) return;


        player.flipX(true);
        player.isFlipped = true;
        player.move(-PLAYER_SPEED, 0);
        if (player.isGrounded()) player.enterState("run");
    }

    function moveRight(player) {
        if (isKeyDown("left") || isKeyDown("a")) return;

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
            move(ranger.isFlipped ? LEFT : RIGHT, BULLET_SPEED),
            cleanup(),
            "bullet",
        ]);
    }

    return ranger;
}