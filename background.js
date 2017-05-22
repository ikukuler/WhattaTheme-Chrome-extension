chrome.browserAction.onClicked.addListener(function(tab) {

	chrome.runtime.onMessage.addListener(function(req, sender, res) {
		if (req.from == "content" && req.subj == "setTheme") {
			
		}
	})
});
