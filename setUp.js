//just a bunch of elements
const canva = document.createElement("canvas");
const division = document.createElement("div");

division.setAttribute("id", "division");
canva.setAttribute("width", document.documentElement.scrollWidth);
canva.setAttribute("overflow", "hidden")
canva.setAttribute("height", document.documentElement.scrollHeight);
division.appendChild(canva);
document.body.insertBefore(division, document.body.firstChild);
division.setAttribute("height", "100%");
division.style.zIndex = "1000";
division.style.position = "absolute";


const ctx = canva.getContext('2d');
let lineWidth = 5;
let isPainting = false;
var startX;
var startY;
console.log("Setupped");


