function renderComment(container, comment) {
  container.textContent = "";

  const wrapper = document.createElement("div");
  wrapper.className = "comment";

  const authorEl = document.createElement("strong");
  authorEl.textContent = comment.author;

  const bodyEl = document.createElement("p");
  bodyEl.textContent = comment.body;

  wrapper.appendChild(authorEl);
  wrapper.appendChild(bodyEl);
  container.appendChild(wrapper);
}

const params = new URLSearchParams(window.location.search);
renderComment(document.getElementById("comments"), {
  author: params.get("author") || "guest",
  body: params.get("body") || "",
});
