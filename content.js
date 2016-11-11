chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
 if (request.action == "getSelectedText")
   sendResponse({ selectedText: window.getSelection().toString().replace(/\n/g, " ") });
 else
   sendResponse({});
});
