import "../css/main.css";
import k from "./kaboom";
import menu from "./scenes/menu";
import introContext from "./scenes/introContext";
import lab from "./scenes/lab";
import end from "./scenes/end";
import { loadResources } from "./loadResources";

console.log("ohaider");

loadResources();

const {
    volume,
    scene,
    go,
} = k;

volume(0.5);

scene("menu", menu);
scene("introContext", introContext);
scene("lab", lab);
scene("end", end);

go("menu");