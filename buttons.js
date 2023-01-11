drawing.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content-script.js']
  });
});

stopDraw.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: stopDrawing,
      });
    });

    function stopDrawing() {
      console.log("stopped");
      canva.removeEventListener('pointerdown', down);
      canva.removeEventListener('pointerup', up);
      stroke.removeEventListener('change', changeColor);
      undo.removeEventListener('click', undoStroke);
      division.style.visibility = 'hidden';
      document.getElementById("container").hidden = true;
      canva.style.touchAction = "auto";
  }


  
