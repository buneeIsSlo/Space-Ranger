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

import { chase } from "../components";

export const addCrawler = (posi, tranger) => {
    add([
        sprite("crawly", { anim: "crawl" }),
        pos(posi.x, posi.y),
        area({ width: 40, height: 30 }),
        solid(),
        body(),
        origin("bot"),
        chase(tranger),
        "bot",
        scale(1.3),
    ]);
}