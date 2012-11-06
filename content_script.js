var additionalInfo = {
  "title": document.title,
};
chrome.extension.connect().postMessage(additionalInfo);

