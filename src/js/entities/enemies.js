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

import { chase, patrol } from "../components";

export const addCrawler = (p, tranger) => {
    const crawler = add([
        sprite("crawly", { anim: "crawl" }),
        pos(p),
        area({ width: 40, height: 30 }),
        body(),
        origin("bot"),
        chase(tranger),
        "bot",
        scale(1.3),
    ]);

    crawler.onCollide("bullet", (e) => {
        destroy(crawler);
        destroy(e);
    })
}

export const addStinger = (p, tranger) => {
    const stinger = add([
        sprite("stinger", { anim: "fly" }),
        pos(p),
        area({ width: 40, height: 30 }),
        origin("center"),
        "bot",
    ]);

    const STONE_SPEED = 200;
    let canShoot = true;

    stinger.onUpdate(() => {
        if (tranger.pos.dist(stinger.pos) <= 300) {
            if (tranger.pos.x > stinger.pos.x) stinger.flipX(true);
            else stinger.flipX(false);

            if (canShoot) {
                const dir = tranger.pos.sub(stinger.pos).unit();

                add([
                    pos(stinger.pos),
                    move(dir, STONE_SPEED),
                    sprite("stingerStone", { width: 18, height: 18 }),
                    area(),
                    cleanup(),
                    origin("center"),
                    "stingerStone",
                    z(-1),
                ])

                canShoot = false;
                wait(1, () => canShoot = true);
            }
        }
    })
}