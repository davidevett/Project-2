const editBlogPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blogTitle").value.trim();
  const content = document.querySelector("#blogContent").value.trim();
  const postID = window.location.pathname.split("/")[3];

  const response = await fetch(`/api/posts/${postID}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
    showNotification("Post updated successfully!");
  } else {
    showNotification("Failed to update post.", "error");
  }
};

document
  .querySelector(".editPost-form")
  .addEventListener("submit", editBlogPostHandler);

const deletePostHandler = async (event) => {
  event.preventDefault();

  const postID = window.location.pathname.split("/")[3];

  const response = await fetch(`/api/posts/${postID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
    showNotification("Post deleted successfully!");
  } else {
    showNotification("Failed to delete post.", "error");
  }
};

document
  .querySelector("#deletePostButton")
  .addEventListener("click", deletePostHandler);