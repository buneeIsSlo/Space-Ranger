import "../sass/main.scss";
import kaboom from "kaboom";

console.log("ohaider");

const width = window.innerWidth;
const height = window.innerHeight;

kaboom({
    width: width,
    height: height,
    canvas: document.getElementById("game"),
});

import { loadResources } from "./loadResources";

loadResources();


scene("main", () => {
    layers([
        "bg",
        "game",
        "foreground",
    ], "game");


    add([
        text("Ohaider"),
        pos(0, 0),
    ]);


    add([
        sprite("background", { width: width, height: height }),
        pos(0, 0),
        layer("bg"),
        fixed(),
    ])


    const ranger = add([
        sprite("ranger"),
        layer("game"),
        scale(2.2),
        pos(center()),
    ])
    ranger.play("idle");

});

go("main");


