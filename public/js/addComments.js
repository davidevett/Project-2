// Handles the logic for adding a comment

const addCommentHandler = async (event) => {
  event.preventDefault();

  const post_id = window.location.pathname.split("/")[2];
  const commentContent = document.querySelector("#commentContent").value.trim();

  if (commentContent) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ post_id, commentContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(`Failed to add comment`);
    }
  }
};

document
  .querySelector(".comment-form")
  .addEventListener("submit", addCommentHandler);
