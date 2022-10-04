const canva = document.createElement("canvas");
const division = document.createElement("div");
const bruh = document.createElement("p");
const bruh2 = document.createTextNode("bruh please");
//document.documentElement.scrollWidth
division.setAttribute("id", "division");
canva.setAttribute("width", document.documentElement.scrollWidth, "overflow", "hidden");
canva.setAttribute("height", document.documentElement.scrollHeight);
bruh.appendChild(bruh2);
division.appendChild(canva);
division.appendChild(bruh);
document.body.appendChild(division);
division.style.zIndex = "1000";
division.style.position = "absolute";

const ctx = canva.getContext('2d');
let lineWidth = 5;
let isPainting = false;
var startX;
var startY;
console.log("Setupped");


