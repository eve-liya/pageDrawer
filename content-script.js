document.getElementById("division").style.zIndex = "1000";
document.getElementById("division").style.position = "absolute";

draw = (e) => {
    if(!isPainting) {
        console.log("bruh")
        return;
    }
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
   // console.log("drawing")
}

canva.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = Math.floor(e.clientX) - canva.offsetWidth;
    startY = Math.floor(e.clientY)- canva.offsetHeight;
    canva.addEventListener('mousemove', draw);
});

canva.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});


