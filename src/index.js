import React from "react";
import ReactDOM from "react-dom";
import Form from "./Components/Form";
import registerServiceWorker from "./registerServiceWorker";
import { requestLabels } from "./browser";

window.onload = () => {
  const comments = document.querySelectorAll(".comment");
  requestLabels().then(
    labels => {
      [...comments].forEach(comment => {
        // create new node as mount beside comment author
        const id = `comment-tag-${comment.id}`;
        const mount = document.createElement("div");
        mount.id = id;
        const refNode = comment.querySelector(".author");
        refNode.appendChild(mount);

        // render label
        const labelVal = labels === undefined ? undefined : labels[id];
        ReactDOM.render(
          <Form commentId={id} label={labelVal} />,
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
