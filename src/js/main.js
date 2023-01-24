import "../sass/main.scss";
import k from "./kaboom";
import lab from "./scenes/lab";
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

scene("lab", lab);

go("lab");