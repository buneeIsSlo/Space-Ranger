import "../sass/main.scss";
import k from "./kaboom";
import menu from "./scenes/menu";
import introContext from "./scenes/introContext";
import lab from "./scenes/lab";
import end from "./scenes/end";
import { loadResources } from "./loadResources";

console.log("ohaider");

loadResources();

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
    time,
    opacity,
    sprite,
    outline,
    layer,
    layers,
    fixed
} = k

volume(0.5);

scene("menu", menu);
scene("introContext", introContext);
scene("lab", lab);
scene("end", end);

go("menu");