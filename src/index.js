import React from "react";
import ReactDOM from "react-dom";
import Form from "./Components/Form";
import registerServiceWorker from "./registerServiceWorker";
import { requestLabels } from "./browser";

window.onload = () => {
  const comments = document.querySelectorAll(".comment");
  requestLabels().then(
    labels => {
      console.log(labels);
      [...comments].forEach(comment => {
        const id = `comment-tag-${comment.id}`;
        const mount = document.createElement("div");
        mount.id = id;
        const refNode = comment.querySelector(".author");
        refNode.appendChild(mount);
        ReactDOM.render(
          <Form commentId={id} label={labels[id]} />,
          document.getElementById(id)
        );
      });
    },
    error => {
      console.log(error);
    }
  );
  registerServiceWorker();
};
