import k from "../kaboom";

const {
    add,
    pos,
    text,
    origin,
    sprite,
    layer,
    fixed,
} = k;

export const addOrbCount = () => {
    add([
        sprite("orb"),
        pos(25, 25),
        area({ width: 100, height: 100, offset: vec2(0, -2) }),
        origin("center"),
        scale(0.15),
        layer("ui"),
        fixed(),
    ]);

    add([
        text("x", { size: 8, font: "sink" }),
        pos(38, 18),
        layer("ui"),
        fixed(),
        "orbCount"
    ]);

    let count = add([
        text("0", { size: 11, font: "sink" }),
        pos(50, 18),
        layer("ui"),
        fixed(),
        "orbCount"
    ]);

    return count;
};