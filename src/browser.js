/* global browser */

// Store label and return new state
function storeLabel(value, commentId, showInput) {
  browser.runtime
    .sendMessage({
      request: "storeLabel",
      data: {
        id: commentId,
        value
      }
    })
    .then(
      message => {
        console.log(message);
        return {
          label: value,
          showInput: !showInput
        };
      },
      message => {
        console.log(`Error: ${message.response}`);
      }
    );
}

function requestLabels() {
  return new Promise((resolve, reject) => {
    // Wait to ensure background script is loaded first (can't find alternative in docs)
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
