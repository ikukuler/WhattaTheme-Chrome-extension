
window.addEventListener('DOMContentLoaded', function () {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'getTheme'},
        // ...also specifying a callback to be called from the receiving end (content script) 
        function(data) {
            document.querySelector("h1").textContent = data;
        });
  });
});
