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


export default () => {

    layers([
        "bg",
        "game",
        "ui"
    ], "game");

    add([
        sprite("clouds", { width: width(), height: height() }),
        color(0, 255, 255),
        layer("bg"),
        pos(0, 0),
        fixed(true),
    ])

    add([
        sprite("background", { width: width(), height: height(), tiled: true }),
        layer("bg"),
        pos(0, 0),
        fixed(true),
    ])

    add([
        text("SPACE", { size: 32, font: "spacy", align: "center", letterSpacing: 4 }),
        pos(center().x, 25),
        color(YELLOW),
        origin("center"),
        layer("ui"),
    ])

    add([
        text("RANGER", { size: 32, font: "spacy", align: "center", letterSpacing: 4 }),
        pos(center().x, 60),
        color(YELLOW),
        origin("center"),
        layer("ui"),
    ])


    let startText = add([
        text("Press Space to Start", { size: 12, font: "sink", align: "center", letterSpacing: 1 }),
        pos(center().x, center().y - 13),
        color(WHITE),
        area(),
        origin("center"),
        layer("ui"),
        "start"
    ])

    loop(0.8, () => {
        startText.opacity = startText.opacity == 1 ? 0 : 1;
    });

    const planet = add([
        sprite("planet", { width: 130 }),
        pos(center().x, height() + 50),
        scale(2),
        area(),
        solid(),
        rotate(360),
        origin("center"),
        layer("game"),
    ])

    planet.onUpdate(() => {
        if (planet.angle <= 0) planet.angle = 360;
        else planet.angle -= 0.2;
    });

    add([
        sprite("tranger", { anim: "run", animSpeed: 0.8, }),
        layer("game"),
        pos(center().x, height() - 40),
        body(),
        scale(1.3),
        origin("center"),
        area({ width: 25, height: 35, offset: vec2(0) }),
    ])

    onKeyPress("space", () => go("introContext"));
    onClick("start", () => go("introContext"));
}