division.style.visibility = "visible";
document.getElementById("container").hidden = false;

let animationFrameId;
let points = [];

function addStroke(imageData) {
    if (undoStack.length >= 10) {
        undoStack.shift();  // Limit the undo stack to 10 states
    }
    undoStack.push(imageData);
    size = undoStack.length;
}

function undoStroke(){
    if (size > 1){
        size--;
        ctx.putImageData(undoStack[size], 0, 0);
    } else {
        ctx.putImageData(undoStack[0], 0, 0);
    }
}

function draw(e) {
    try {
        if (!isPainting) return;

        var rect = canva.getBoundingClientRect();
        ctx.lineWidth = lineWidth;
        ctx.lineCap = 'round';

        points.push({ x: e.clientX - rect.x, y: e.clientY - rect.y });

        if (!animationFrameId) {
            animationFrameId = requestAnimationFrame(() => {
                ctx.beginPath();
                ctx.moveTo(points[0].x, points[0].y);
                for (let i = 1; i < points.length; i++) {
                    ctx.lineTo(points[i].x, points[i].y);
                }
                ctx.stroke();
                points = [];  // Reset the points array after drawing
                animationFrameId = null;
            });
        }
    } catch (error) {
        console.error("Error during drawing:", error);
    }
}

function down(e){
    isPainting = true;
    document.body.style.cursor = 'crosshair';  // Change cursor when drawing
    var rect = canva.getBoundingClientRect();
    startX = e.clientX - rect.x;
    startY = e.clientY- rect.y;
    canva.style.touchAction = "none";
    canva.addEventListener('pointermove', debouncedDraw);
}

function up(e) {
    isPainting = false;
    document.body.style.cursor = 'default';  // Reset cursor when not drawing
    ctx.stroke();
    ctx.beginPath();
    addStroke(ctx.getImageData(0, 0, canva.width, canva.height));
    canva.removeEventListener('pointermove', debouncedDraw);
}

function changeColor(e) {
    ctx.strokeStyle = e.target.value;
}

let isDrawingActive = false;

function startDrawing() {
    if (!isDrawingActive) {
        isDrawingActive = true;
        canva.addEventListener('pointerdown', down);
        canva.addEventListener('pointerup', up);
        stroke.addEventListener('change', changeColor);
        undo.addEventListener('click', undoStroke);
    }
}

function stopDrawing() {
    if (isDrawingActive) {
        isDrawingActive = false;
        canva.removeEventListener('pointerdown', down);
        canva.removeEventListener('pointerup', up);
        stroke.removeEventListener('change', changeColor);
        undo.removeEventListener('click', undoStroke);
        division.style.visibility = 'hidden';
        document.getElementById("container").hidden = true;
        canva.style.touchAction = "auto";
    }
}
startDrawing();

canva.addEventListener('pointerdown', down);
canva.addEventListener('pointerup', up);
stroke.addEventListener('change', changeColor);
undo.addEventListener("click", undoStroke);
