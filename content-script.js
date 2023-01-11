division.style.visibility = "visible";
document.getElementById("container").hidden = false;

function addStroke(imageData) {
    console.log("add Stroke");
    buffer.push(imageData);
    if (buffer.length === 2){
        undoStack[size++] = buffer.shift();
    }
}

function undoStroke(){
    console.log("undo");
    if (size - 1 !== 0){
        size--;
        ctx.putImageData(undoStack[size],0,0);
        if (size > 0){ undoStack.pop(); }
        buffer = [];
    }
    else {
        ctx.putImageData(undoStack[0],0,0);
    }
}

function draw(e){
    if(!isPainting) {
        return;
    }
    var rect = canva.getBoundingClientRect();
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - rect.x, e.clientY- rect.y);
    console.log("Drawing");
    ctx.stroke();
}

function down(e){
    isPainting = true;
    var rect = canva.getBoundingClientRect();
    // debugging: console.log(rect);
    startX = e.clientX - rect.x;
    startY = e.clientY- rect.y;
    canva.style.touchAction = "none";
    canva.addEventListener('pointermove', draw);
}

function up(e) {
    isPainting = false;
    ctx.stroke()
    ctx.beginPath();
    addStroke(ctx.getImageData(0,0,document.documentElement.scrollWidth,document.documentElement.scrollHeight));
    canva.removeEventListener('pointermove', draw);
}

function changeColor(e) {
    ctx.strokeStyle = e.target.value;
}

canva.addEventListener('pointerdown', down);

canva.addEventListener('pointerup', up);

stroke.addEventListener('change', changeColor);

undo.addEventListener("click", undoStroke)



