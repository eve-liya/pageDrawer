division.style.visibility = "visible";
document.getElementById("container").hidden = false;


const undoStack = [];
let size = 0;

function addStroke(imageData) {
    undoStack[size] = imageData;
    console.log(imageData);
    size++;
}

function undoStroke(){
    size--;
    ctx.putImageData(undoStack[size],0,0);
    undoStack[size] = null;
    console.log(undoStack);
    console.log(size);
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

canva.addEventListener('pointerdown', down = (e) => {
    isPainting = true;
    var rect = canva.getBoundingClientRect();
    // debugging: console.log(rect);
    startX = e.clientX - rect.x;
    startY = e.clientY- rect.y;
    canva.style.touchAction = "none";
    canva.addEventListener('pointermove', draw);
});

canva.addEventListener('pointerup', e => {
    isPainting = false;
    ctx.stroke()
    ctx.beginPath();
    addStroke(ctx.getImageData(0,0,document.documentElement.scrollWidth,document.documentElement.scrollHeight));
    canva.removeEventListener('pointermove', draw);
});

stroke.addEventListener('change', e =>{
    ctx.strokeStyle = e.target.value;
});

undo.addEventListener("click", e => {
    console.log("undone");
    undoStroke();
})



