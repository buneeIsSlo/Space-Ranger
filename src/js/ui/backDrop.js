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

export function addBackdrop(time, from, to) {
    const shade = add([
        rect(width(), height()),
        pos(center()),
        fixed(),
        color(BLACK),
        origin("center"),
        opacity(from),
        layer("ui"),
        "shade",
        "endScr"
    ]);

    let timer = 0;
    shade.onUpdate(() => {
        if (timer < time) {
            timer += dt();
            shade.opacity = lerp(from, to, timer);
            // shade.opacity = map(timer, 0, time, from, to);
        }
    })

}

export function removeBackdrop() {
    destroyAll("shade");
}