/* global browser */
// TODO: move me out of public
function handleMessage(request, sender, sendResponse) {
  if (request.request === "requestLabels") {
    browser.storage.sync
      .get()
      .then(item => sendResponse(item), error => sendResponse(error));
  } else if (request.request === "removeLabel") {
    browser.storage.sync.remove(request.id);
  } else {
    const data = {};
    data[request.data.id] = request.data.value;
    browser.storage.sync.set(data).then(
      sendResponse({
        response: `Saved ${request.data.id}, ${request.data.value}`
      }),
      sendResponse({
        response: `Error saving ${request.data.id}, ${request.data.value}`
      })
    );
  }
  return true;
}

browser.runtime.onMessage.addListener(handleMessage);
