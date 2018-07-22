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

function removeLabel(commentId) {
  return new Promise((resolve, reject) => {
    browser.runtime
      .sendMessage({
        request: "removeLabel",
        data: {
          id: commentId
        }
      })
      .then(resolve, reject);
  });
}

function requestLabels() {
  return new Promise((resolve, reject) => {
    browser.runtime
      .sendMessage({
        request: "requestLabels"
      })
      .then(resolve, reject);
  });
}

export { storeLabel, removeLabel, requestLabels };
