document.getElementById("division").style.zIndex = "1000";
document.getElementById("division").style.position = "absolute";

draw = (e) => {
    if(!isPainting) {
       // console.log("bruh")
        return;
    }
    var rect = canva.getBoundingClientRect();
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - rect.x, e.clientY- rect.y);
    ctx.stroke();
   // console.log("drawing")
}

canva.addEventListener('mousedown', (e) => {
    isPainting = true;
    
    var rect = canva.getBoundingClientRect();
    console.log(rect);
    startX = e.clientX - rect.x;
    startY = e.clientY- rect.y;
    canva.addEventListener('mousemove', draw);
});

canva.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});


