import k from "../kaboom";
import { addBackdrop } from "../ui/backDrop";

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

export function addBtn(t, p, func) {
    const btn = add([
        rect(140, 35, { radius: 1 }),
        pos(p),
        area(),
        fixed(),
        origin("center"),
        color(WHITE),
        outline(1, WHITE),
        opacity(0),
        layer("ui"),
        "endScr"
    ]);

    const txt = add([
        text("RESTART LEVEL", { size: 8, font: "sink", letterSpacing: 2, }),
        pos(btn.pos),
        area(),
        fixed(),
        origin("center"),
        color(WHITE),
        layer("ui"),
        "endScr"
    ]);

    btn.onClick(() => func());
    btn.onUpdate(() => {
        if (btn.isHovering()) {
            btn.use(scale(1.05));
            btn.color = BLUE;
            btn.opacity = 0.4;
        }
        else {
            btn.use(scale(1));
            btn.color = WHITE;
            btn.opacity = 0;
        }
    })
}