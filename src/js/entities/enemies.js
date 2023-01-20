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
        sprite("crawly", { anim: "idle" }),
        pos(p),
        area({ width: 35, height: 30 }),
        body(),
        origin("bot"),
        chase(tranger),
        scale(1.3),
        state("idle", ["idle", "chase"]),
        "bot",
        "danger",
    ]);

    crawler.onCollide("bullet", (e) => {
        destroy(crawler);
        destroy(e);
    });

    crawler.onStateEnter("idle", () => {
        crawler.play("idle");
    });

    crawler.onStateEnter("chase", () => {
        crawler.play("crawl");
    })
}

export const addStinger = (p, tranger) => {
    const stinger = add([
        sprite("stinger", { anim: "fly" }),
        pos(p),
        area({ width: 40, height: 30 }),
        origin("center"),
        "bot",
        "danger",
    ]);

    const STONE_SPEED = 200;
    let canShoot = true;

    stinger.onUpdate(async () => {
        if (tranger.pos.dist(stinger.pos) <= 300) {
            if (tranger.pos.x > stinger.pos.x) stinger.flipX(true);
            else stinger.flipX(false);

            if (canShoot && !tranger.isDead) {
                const dir = tranger.pos.sub(stinger.pos).unit();

                dir.x += 0.1; // to direct the stone more towards the center of the player 

                let stone = addStingerSton();
                stone.use(move(dir, STONE_SPEED));

                canShoot = false;
                await wait(0.8, () => canShoot = true);
            }
        }
    })

    function addStingerSton() {
        const stone = add([
            pos(stinger.pos),
            sprite("stingerStone", { width: 18, height: 18 }),
            area({ width: 12, offset: vec2(0) }),
            cleanup(),
            origin("center"),
            z(-1),
            "stingerStone",
            "danger",
        ]);


        stone.onCollide("killStone", () => {
            const impact = add([
                sprite("impact", { anim: "hit" }),
                area({ width: 20 }),
                pos(stone.pos),
                origin("center"),
                rotate(90),
                lifespan(0.2, { fade: 0.1 }),
            ]);

            destroy(stone);
        })

        return stone;
    }
}