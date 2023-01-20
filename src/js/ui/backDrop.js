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

export function addBackdrop() {
    const shade = add([
        rect(width(), height()),
        pos(center()),
        fixed(),
        color(BLACK),
        origin("center"),
        opacity(0),
        layer("ui"),
        "shade",
        "endScr"
    ]);

    const fadeIn = loop(0.2, () => {
        if (shade.opacity >= 0.5) fadeIn();

        else shade.opacity += 0.075;
    });

}

export function removeBackdrop() {
    destroy("shade");
}