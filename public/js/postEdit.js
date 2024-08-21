// Handles the logic for editing a post

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
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".editPost-form")
  .addEventListener("submit", editBlogPostHandler);

const deletePostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blogTitle").value.trim();
  const content = document.querySelector("#blogContent").value.trim();

  const postID = window.location.pathname.split("/")[3];

  const response = await fetch(`/api/posts/${postID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#deletePostButton")
  .addEventListener("click", deletePostHandler);
