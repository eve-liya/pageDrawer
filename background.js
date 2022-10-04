chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['setUp.js']
    })
    chrome.action.setPopup({
      popup: 'popup.html',
      tabId: tab.id
    });
  });

  

