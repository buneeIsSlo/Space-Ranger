import k from "../kaboom";

const {
    add,
    pos,
    text,
    color,
    width,
    height,
    origin,
    wait,
    time,
    layer,
} = k;


export default async () => {
    add([
        rect(width(), height()),
        color(0, 0, 0),
        layer("bg"),
        pos(0, 0),
        fixed(true),
    ]);

    let tbc = add([
        text("To be continued...", { size: 20, font: "sinko" }),
        pos(center()),
        color(WHITE),
        origin("center"),
    ]);

    await wait(2, () => {
        destroy(tbc);
    });

    add([
        text("Game made by", { size: 14, font: "apl386" }),
        pos(center().x, center().y - 20),
        color(WHITE),
        origin("center"),
    ]);
    add([
        text("bunee", {
            size: 24,
            font: "apl386",
            transform: (idx) => ({
                color: hsl2rgb((time() * 0.2 + idx * 0.1) % 1, 0.7, 0.8),
                scale: wave(1, 1.2, time() * 3 + idx),
                angle: wave(-9, 9, time() * 3 + idx),
            }),
        }),
        pos(center()),
        color(WHITE),
        origin("center"),
    ]);
};