drawing.addEventListener("click", async () => {
  try {
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['content-script.js']
      });
  } catch (error) {
      console.error("Failed to start drawing:", error);
  }
});

stopDraw.addEventListener("click", async () => {
  try {
      let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: stopDrawing
      });
  } catch (error) {
      console.error("Failed to stop drawing:", error);
  }
});
