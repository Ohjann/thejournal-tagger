/* global browser */
// TODO: move me out of public
function handleMessage(request, sender, sendResponse) {
  if (request.request === "requestLabels") {
    browser.storage.local
      .get()
      .then(items => sendResponse(items), error => sendResponse(error));
  } else if (request.request === "removeLabel") {
    browser.storage.local.remove(request.id);
  } else {
    const data = {};
    data[request.data.id] = request.data.value;
    console.log(data);
    browser.storage.local.set(data).then(
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
