//just a bunch of elements
const canva = document.createElement("canvas");
const division = document.createElement("div");
let ui = `<style>
.color {
    box-sizing: border-box;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display:block;
        margin:5px;


    background: #FF0202;
    border: 1px solid #000000;
}

.container {
    box-sizing: border-box;
    width: 50px;
    height: 100px;
    background:rgb(218, 218, 218);
}
</style>
        <div class = "container" style = "z-index: 1000">
            <button class="color"></button>
            <button  class = "color" style = "background:#58eb7c"></button>
            <input id="stroke" name='stroke' type="color">
        </div>
`

let interface = document.createElement("div");
interface.innerHTML = ui;



division.setAttribute("id", "division");
canva.setAttribute("width", document.documentElement.scrollWidth);
canva.setAttribute("overflow", "hidden")
canva.setAttribute("height", document.documentElement.scrollHeight);
division.appendChild(canva);
document.body.insertBefore(division, document.body.firstChild);
division.appendChild(interface);
division.setAttribute("height", "100%");
division.style.zIndex = "1000";
division.style.position = "absolute";

interface.style.position = "sticky";
interface.style.zIndex = "1000";
interface.style.bottom = (screen.height/2) + "px";
interface.style.left = 0;

const ctx = canva.getContext('2d');
let lineWidth = 5;
let isPainting = false;
var startX;
var startY;
console.log("Setupped");


