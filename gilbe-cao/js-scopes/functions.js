function fillAppWithText(appId, text, maxLength, updateView) {
	for (let i = 0; i < maxLength; i++) {
		updateView(appId, text);
	}
}

const updateView = (appId, text) => document.getElementById(appId).append(text);

fillAppWithText('app', 'Functional programming mola!', myVar, updateView);
fillAppWithText('otrApp', 'Skylab mola!', myVar, updateView);
