var devcss = new XMLHttpRequest(),
	stylesheet = 'Custom.css';

devcss.open("GET", "/" + stylesheet, false);
devcss.send();
chrome.devtools.panels.applyStyleSheet(devcss.responseText);
