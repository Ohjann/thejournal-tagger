/* global browser */
/*  TODO: DELETE ME */

function addFormStyles(form) {
  const formStyles = `float: left;
    margin-left: 1em;
    font-size: 0.8em;`;
  const inputStyle = `height: 25px;
    padding: 0 5px;
    vertical-align: top;
    box-shadow: none;
    border-right: none;
    display: none;`;
  const imgStyle = `width: 25px;
    border-radius: unset;
    margin-left: -7px;
    cursor: pointer;`;
  const submitStyle = `height: 27px;
    width: 48px;
    background: rgb(70, 209, 96);
    border: none;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    word-break: break-all;
    display: none;`;

  form.style.cssText = formStyles;
  form.children[0].style.cssText = imgStyle;
  form.children[1].style.cssText = inputStyle;
  form.children[2].style.cssText = submitStyle;
}

function addSpanStyle(span) {
  const spanStyles = `padding: 0 5px;
    border: 1px solid #c7c7c7;
    border-radius: 3px;
    font-size: .9em;
    font-weight: normal;
    display: inline-block;
    vertical-align: bottom;
    margin-top: 1px;
    margin-left: 7px;`;
  span.style.cssText = spanStyles;
}

function removeLabel(e) {
  const id = e.target.id.split("-")[1];
  browser.runtime
    .sendMessage({
      request: "removeLabel",
      data: {
        id
      }
    })
    .then(() => {
      e.target.parentNode.removeChild(e.target);
    });
}

function notifyExtension(e) {
  e.preventDefault();
  if (e.target.tagName !== "FORM") {
    return;
  }

  browser.runtime
    .sendMessage({
      request: "storeLabel",
      data: {
        id: e.target.children[1].name,
        value: e.target.children[1].value
      }
    })
    .then(
      () => {
        const span = document.createElement("span");
        span.innerText = e.target.children[1].value;
        addSpanStyle(span);
        const parent = e.target.parentNode;
        parent.replaceChild(span, e.target);
      },
      message => {
        console.log(`Error: ${message.response}`);
      }
    );
}

function appendLabel(comment, labels) {
  // use profile url as identifier
  const identifier = comment.querySelector(".author .author-left a").href;
  const refNode = comment.querySelector(".author .actions");
  if (identifier in labels) {
    const span = document.createElement("span");
    const xSpan = document.createElement("span");
    span.innerText = labels[identifier];
    xSpan.innerText = "x";
    xSpan.onclick = removeLabel;
    xSpan.id = `remove-${identifier}`;
    xSpan.style.cssText = `border-left: 1px solid black;
      padding-left: 5px;
      margin-left: 5px;
      cursor: pointer;`;
    addSpanStyle(span);
    span.append(xSpan);
    refNode.parentNode.insertBefore(span, refNode);
  } else {
    const input = document.createElement("input");
    input.name = identifier;
    input.type = "text";

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Save";

    const pic = document.createElement("img");
    pic.src = browser.extension.getURL("label.svg");

    pic.onclick = function(event) {
      event.target.parentNode.children[1].style.display = "inline-block";
      event.target.parentNode.children[2].style.display = "inline-block";
    };

    const form = document.createElement("form");
    form.onsubmit = notifyExtension;
    form.append(pic);
    form.append(input);
    form.append(submit);
    addFormStyles(form);

    refNode.parentNode.insertBefore(form, refNode);
  }
}

window.onload = () => {
  const comments = document.querySelectorAll(".comment");
  browser.runtime
    .sendMessage({
      request: "requestLabels"
    })
    .then(
      labels => {
        [...comments].map(comment => appendLabel(comment, labels));
      },
      error => {
        console.log(`Error: ${error}`);
      }
    );
};
