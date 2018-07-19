/* global browser */

// Store label and return new state
function storeLabel(value, commentId, showInput) {
  return new Promise((resolve, reject) => {
    browser.runtime
      .sendMessage({
        request: "storeLabel",
        data: {
          id: commentId,
          value
        }
      })
      .then(() => {
        resolve({
          label: value,
          showInput: !showInput
        });
      }, reject);
  });
}

function requestLabels() {
  return new Promise((resolve, reject) => {
    // Hacky wait to ensure background script is loaded first (can't find alternative in docs)
    setTimeout(() => {
      browser.runtime
        .sendMessage({
          request: "requestLabels"
        })
        .then(resolve, reject);
    }, 1000);
  });
}

export { storeLabel, requestLabels };
