import k from "../kaboom";

const {
    add,
    pos,
    origin,
    wait,
    sprite,
} = k;

import { chase } from "../components";

export const addCrawler = (p, ranger) => {
    const crawler = add([
        sprite("crawly", { anim: "idle" }),
        pos(p),
        area({ width: 35, height: 30 }),
        body(),
        origin("bot"),
        chase(ranger),
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
    });
};

export const addStinger = (p, ranger) => {
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
        if (ranger.pos.dist(stinger.pos) <= 300) {
            if (ranger.pos.x > stinger.pos.x) stinger.flipX(true);
            else stinger.flipX(false);

            if (canShoot && !ranger.isDead) {
                const dir = ranger.pos.sub(stinger.pos).unit();

                dir.x += 0.1; // to direct the stone more towards the center of the player 

                let stone = addStingerSton();
                stone.use(move(dir, STONE_SPEED));

                canShoot = false;
                await wait(0.8, () => canShoot = true);
            }
        }
    });

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
            add([
                sprite("impact", { anim: "hit" }),
                area({ width: 20 }),
                pos(stone.pos),
                origin("center"),
                rotate(90),
                lifespan(0.2, { fade: 0.1 }),
                "impact"
            ]);

            destroy(stone);
        });

        return stone;
    }
};