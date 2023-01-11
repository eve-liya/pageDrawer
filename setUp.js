//just a bunch of elements
const canva = document.createElement("canvas");
const division = document.createElement("div");
let ui = `<style>


.color {
    box-sizing: border-box;
        width: 30px;
        height: 30px;
        display:block;
        margin:10px;

    background: #FF0202;
    border: 1px solid #000000;
}

.container {
    all: initial;
    box-sizing: border-box;
    border: 1px solid #000000;
    width: 55px;
    height: 100px;
    background:rgb(218, 218, 218);
}
</style>
        <div class = "container" id = "container" style = "z-index: 1000; display: inline-block">
            <button  class = "color" style = "background:#58eb7c" id='undo'><=</button>
            <input id="stroke" name='stroke' type="color">
        </div>
`
let interface = document.createElement("div");
//let shadowRoot = interface.attachShadow({ mode: 'open' });
interface.innerHTML = ui;
interface.style.display = "inline-block";



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

division.style.visibility = "hidden";
document.getElementById("container").hidden = true;


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


