document.getElementById("division").hidden = false;

draw = (e) => {
    if(!isPainting) {
        return;
    }
    var rect = canva.getBoundingClientRect();
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - rect.x, e.clientY- rect.y);
    ctx.stroke();
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

stroke.addEventListener('change', e =>{
    ctx.strokeStyle = e.target.value;
})


