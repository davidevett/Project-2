// Handles the logic for adding a post from the dashboard page

let button = document.getElementById("addPost");

button.addEventListener("click", function () {
  document.getElementById("popUpForm").style.display = "block";
});

const addBlogPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#blogTitle").value.trim();
  const content = document.querySelector("#blogContent").value.trim();

  if (title && content) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(`Failed to add post.`);
    }
  }
};

document
  .querySelector(".addPost-form")
  .addEventListener("submit", addBlogPostHandler);
