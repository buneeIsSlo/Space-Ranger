import k from "../kaboom";
import { addBtn } from "./button";

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

export async function showEndScreen() {
    await wait(0.5, () => {
        let fail = add([
            text("Mission Failed", { size: 18, font: "sink", letterSpacing: 2 }),
            pos(center().x, center().y - 40),
            color(RED),
            origin("center"),
            layer("ui"),
            fixed(),
            opacity(0),
            "endScr",
            "endUI"
        ]);

        addBtn("test", vec2(center().x, height() - 110), () => go("lab"));

        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                every('endUI', (e) => {
                    e.opacity += 0.1;
                });
            }, i * 50);
        };
    });
}