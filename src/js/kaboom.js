import kaboom from "kaboom";

console.log("ohaider");

const k = kaboom({
    width: 400,
    height: 300,
    canvas: document.getElementById("game"),
    scale: 2,
});
canvas.focus()

export default k