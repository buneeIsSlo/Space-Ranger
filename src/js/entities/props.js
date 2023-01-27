import k from "../kaboom";
import { hover } from "../components";

const {
    add,
    pos,
    origin,
    sprite,
    outline,
    layer,
} = k;

export const addServers = (p) => {
    const servers = add([
        sprite("servers",),
        pos(p),
        area(),
        body(),
        origin("center"),
        scale(1.6),
        "killStone"
    ])
}

export const addTerminal = (p) => {
    const terminal = add([
        sprite("terminal"),
        pos(p),
        origin("center"),
        scale(1.2),
        layer("tile"),
    ])
}

export const addOrb = (p) => {
    const orb = add([
        sprite("orb"),
        pos(p),
        area({ width: 100, height: 100, offset: vec2(0, -2) }),
        origin("center"),
        scale(0.2),
        layer("ui"),
        outline(5, RED),
        hover(),
        "orb"
    ]);
}