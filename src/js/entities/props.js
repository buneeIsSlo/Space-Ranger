import k from "../kaboom";
import { hover } from "../components";

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

export const addServers = (p) => {
    const servers = add([
        sprite("servers"),
        pos(p),
        area(),
        body(),
        origin("center"),
        scale(1.4),
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
        area(),
        origin("center"),
        scale(0.2),
        layer("ui"),
        outline(5, RED),
        hover()
    ])
}