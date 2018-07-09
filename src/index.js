import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./Components/Form";
import registerServiceWorker from "./registerServiceWorker";

const comments = document.querySelectorAll(".comment");

[...comments].forEach(comment => {
  const id = `comment-tag-${comment.id}`;
  const mount = document.createElement("div");
  mount.id = id;
  const refNode = comment.querySelector(".author");
  console.log(`Inserting ${id} as child of`, refNode);
  refNode.appendChild(mount);
  ReactDOM.render(<Form />, document.getElementById(id));
});
registerServiceWorker();
