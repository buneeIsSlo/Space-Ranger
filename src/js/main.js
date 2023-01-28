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
    go,
} = k;

volume(0.0);

scene("menu", menu);
scene("introContext", introContext);
scene("lab", lab);
scene("end", end);

go("lab");