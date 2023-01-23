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
    fixed,
} = k;

export const addOrbCount = () => {
    const orb = add([
        sprite("orb"),
        pos(25, 25),
        area({ width: 100, height: 100, offset: vec2(0, -2) }),
        origin("center"),
        scale(0.15),
        layer("ui"),
        fixed(),
    ]);

    let x = add([
        text("x", { size: 8, font: "sink" }),
        pos(38, 18),
        layer("ui"),
        fixed(),
        "orbCound"
    ]);

    let count = add([
        text("0", { size: 11, font: "sink" }),
        pos(50, 18),
        layer("ui"),
        fixed(),
        "orbCound"
    ]);

    return count;
}