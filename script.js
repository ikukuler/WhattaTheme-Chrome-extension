var getThemeName = function() {

	var wpString = "/wp-content/themes/";
    var strLength = wpString.length;
    var linkEl = document.querySelector("link[href*='wp-content/themes']");
    if (linkEl) {
		var indexOf = linkEl.href.indexOf(wpString);
        var pos = indexOf + strLength;
        var themePlusCss = linkEl.href.slice(pos);
        var slide = themePlusCss.indexOf("/");
        var theme = themePlusCss.slice(0, slide);
        return theme;
	} else return "Theme Name Not Found";

}

var themeName = getThemeName();
console.log(themeName);

chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  // First, validate the message's structure
  if ((msg.from === 'popup') && (msg.subject === 'getTheme')) {

    response(themeName);
  }
});
