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
      //canva = document.getElementById("canva");
       console.log("stopped")
       canva.removeEventListener('mousemove', draw);
       document.getElementById("division").style.zIndex = "0";
       document.getElementById("division").style.position = "static";
  }
  
