chrome.action.onClicked.addListener((tab) => {
  // Inject setup script only if it's not already injected
  chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: isAlreadySetup,
  }, (results) => {
      if (!results || results[0].result === false) {
          chrome.scripting.executeScript({
              target: { tabId: tab.id },
              files: ['setUp.js']
          });
      }
  });
  
  // Set the popup for drawing controls
  chrome.action.setPopup({
      popup: 'popup.html',
      tabId: tab.id
  });
});

// Function to check if the setup script is already injected
function isAlreadySetup() {
  return !!document.getElementById("division");
}
