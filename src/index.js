import React from "react";
import ReactDOM from "react-dom";
import Form from "./Components/Form";
import registerServiceWorker from "./registerServiceWorker";
import { requestLabels } from "./browser";

window.onload = () => {
  const comments = document.querySelectorAll(".comment");
  requestLabels().then(
    labels => {
      console.log(comments);
      [...comments].forEach(comment => {
        const commenterIdentifier = comment.querySelector(".author-left .name")
          .href;
        // create new node as mount beside comment author
        const id = `comment-tag-${commenterIdentifier}`;
        const mount = document.createElement("div");
        mount.id = id;
        comment.querySelector(".author").appendChild(mount);

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
