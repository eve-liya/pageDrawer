// Elements setup
const canva = document.createElement("canvas");
const division = document.createElement("div");
let ui = `<style>
    .color {
        width: 30px; height: 30px; margin: 10px; background: #FF0202;
        border: 1px solid #000000; display: block;
    }
    .container {
        border: 1px solid #000000; width: 55px; height: 100px; background: rgb(218, 218, 218);
    }
</style>
<div class="container" id="container" style="z-index: 1000;">
    <button class="color" style="background:#58eb7c" id="undo"><=</button>
    <input id="stroke" name='stroke' type="color">
</div>`;

let interface = document.createElement("div");
interface.innerHTML = ui;
interface.style.display = "inline-block";
interface.style.position = "fixed";  // Keep the UI fixed on screen
interface.style.top = "10px";
interface.style.left = "10px";

// Canvas and division setup
division.setAttribute("id", "division");
division.appendChild(canva);
document.body.insertBefore(division, document.body.firstChild);
division.appendChild(interface);

const ctx = canva.getContext('2d', { willReadFrequently: true });
let lineWidth = 5;
let isPainting = false;
let startX, startY;
const undoStack = [ctx.getImageData(0, 0, canva.width, canva.height)];
let size = 1;
let buffer = [];

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

window.addEventListener('resize', debounce(resizeCanvas, 200));  // Debounced resize

// Resize canvas dynamically
function resizeCanvas() {
    canva.width = document.documentElement.scrollWidth;
    canva.height = document.documentElement.scrollHeight;
    // Optionally restore last drawing
    ctx.putImageData(undoStack[size - 1], 0, 0);
}
window.addEventListener('resize', debounce(resizeCanvas, 200)); // Debounce resizing
resizeCanvas();