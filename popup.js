function onWindowLoad() {
  chrome.tabs.executeScript(null, 
	  {
		file: "fillForm.js"
	  }, function() {}
  );
}

window.onload = onWindowLoad;