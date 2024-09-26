// Elements setup
const canva = document.createElement("canvas");
const division = document.createElement("div");
let ui = `<style>
    /* Styling for the color buttons */
    .color {
        width: 40px; 
        height: 40px; 
        margin: 5px; 
        background-color: #FF0202;
        border: none; 
        border-radius: 50%; /* Rounded buttons for a modern look */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    /* Hover effect for color buttons */
    .color:hover {
        background-color: #FF4040;
    }

    /* Container for the drawing UI elements */
    .container {
        border: 1px solid #000000; 
        width: 60px; 
        height: auto; 
        background: rgb(240, 240, 240);
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* Undo button inside the container */
    #undo {
        display: block;
        width: 100%;
        height: 40px;
        background-color: #58eb7c;
        border: none;
        border-radius: 5px;
        font-size: 14px;
        font-weight: bold;
        color: white;
        cursor: pointer;
        margin-bottom: 10px;
        transition: background-color 0.3s ease;
    }

    /* Hover effect for undo button */
    #undo:hover {
        background-color: #45c569;
    }

    /* Input field for stroke color */
    #stroke {
        display: block;
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 5px;
        padding: 5px;
        cursor: pointer;
    }
</style>

<div class="container" id="container" style="z-index: 1000;">
    <button class="color" style="background:#58eb7c" id="undo">Undo</button>
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