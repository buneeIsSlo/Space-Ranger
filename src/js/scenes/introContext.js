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

    add([
        sprite("grid", { width: width(), height: height() }),
        layer("bg"),
        pos(0, 0),
        fixed(true),
    ])

    add([
        rect(width(), height()),
        pos(0, 0),
        color(0, 0, 0),
        opacity(0.6),
        fixed(),
    ])

    let context = [
        "Aliens have stormed the base in search of the super rare space orbs",
        "Dropdown to the space lab below",
        "Collect all the orbs and bring them back to Dr. Gale",
        "Also, keep your DISTANCE from the aliens"
    ];

    add([
        {
            draw: () => {
                for (let i = 0; i < context.length; i++) {
                    pushTransform();
                    pushTranslate(5, 30 * i);
                    drawText({
                        text: context[i],
                        origin: "topleft",
                        font: "sink",
                        width: width() - 180,
                        color: i === 2 ? YELLOW : WHITE,
                        pos: vec2(20, 20),
                    });
                    popTransform();
                }
            },
        },
    ]);


    add([
        text("START MISSION", { font: "sink", size: 10 }),
        pos(center().x + 80, center().y + 100),
        area(),
        origin("topleft"),
        color(GREEN),
        "start"
    ])


    onClick("start", () => go("lab"));
}