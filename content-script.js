document.getElementById("division").hidden = false;

function draw(e){
    if(!isPainting) {
        return;
    }
    var rect = canva.getBoundingClientRect();
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - rect.x, e.clientY- rect.y);
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
    canva.removeEventListener('pointermove', draw);
});

stroke.addEventListener('change', e =>{
    ctx.strokeStyle = e.target.value;
})


