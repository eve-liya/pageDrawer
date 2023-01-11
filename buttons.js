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
      console.log("stopped")
      canva.removeEventListener('mousemove', draw);
      document.getElementById("division").hidden = true;
      canva.style.touchAction = "auto";
  }


  
