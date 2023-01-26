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

let music;
music = play("menuMusic", { seek: 16, volume: 0.1 });


const introContext = () => {
    if (!music.isStopped)
        music.play();

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
        "Collect all the orbs and bring them to Dr. Gale",
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
        text("CONTROLS", { font: "sink", size: 10 }),
        pos(center().x, center().y + 120),
        area(),
        origin("center"),
        color(WHITE),
        "controls",
    ])

    onUpdate("controls", (e) => {
        if (e.isHovering()) {
            e.textSize = 11;
        }
        else {
            e.textSize = 10;
        }
    })

    onClick("controls", () => {
        scene("controls", showControls);
        go("controls");
    })

    add([
        text("START MISSION", { font: "sink", size: 10 }),
        pos(center().x + 120, center().y + 120),
        area(),
        origin("center"),
        color(GREEN),
        "start",
    ])

    onUpdate("start", (e) => {
        if (e.isHovering()) {
            e.textSize = 11;
        }
        else {
            e.textSize = 10;
        }
    })

    onClick("start", () => {
        addBackdrop(3, 0, 1);
        wait(1, () => {
            music.stop();
            go("lab")
        })
    });
}


function showControls() {

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
        "Left Arrow / A  -  move Left",
        "Right Arrow / D  -  move Right",
        "Spacebar / Up Arrow / W  -  Jump"
    ];

    add([
        {
            draw: () => {
                for (let i = 0; i < context.length; i++) {
                    pushTransform();
                    pushTranslate(5, 30 * i);
                    drawText({
                        text: context[i],
                        origin: "center",
                        font: "sink",
                        width: width() - 180,
                        color: YELLOW,
                        pos: vec2(center().x, center().y - 40),
                    });
                    popTransform();
                }
            },
        },
    ]);

    add([
        text("BACK", { font: "sink", size: 10 }),
        pos(center().x, center().y + 120),
        area(),
        origin("center"),
        color(WHITE),
        "back",
    ])

    onUpdate("back", (e) => {
        if (e.isHovering()) {
            e.textSize = 11;
        }
        else {
            e.textSize = 10;
        }
    });

    onClick("back", (e) => {
        music.stop();
        go("introContext");
    });

}

export default introContext;