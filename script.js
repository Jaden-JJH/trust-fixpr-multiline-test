function renderComment(container, comment) {
  container.innerHTML = `
    <div class="comment">
      <strong>${comment.author}</strong>
      <p>${comment.body}</p>
    </div>
  `;
}

const params = new URLSearchParams(window.location.search);
renderComment(document.getElementById("comments"), {
  author: params.get("author") || "guest",
  body: params.get("body") || "",
});
