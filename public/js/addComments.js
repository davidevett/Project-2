// Select the comment form element
const commentForm = document.querySelector(".comment-form");

// Check if the comment form exists on the page
if (commentForm) {
  commentForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const commentContent = document.querySelector("#commentContent").value.trim();
    const postId = window.location.pathname.split("/")[2]; // Assuming URL format is /posts/:id

    console.log("Adding comment:", commentContent, "to post:", postId); // Debug log

    if (commentContent) {
      try {
        const response = await fetch("/api/comments", {
          method: "POST",
          body: JSON.stringify({ commentContent, post_id: postId }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          console.log("Comment added successfully."); // Debug log
          document.location.reload(); // Reload to show the new comment
          showNotification("Comment added successfully!"); // Show notification
        } else {
          console.log("Failed to add comment. Server responded with:", response.status); // Debug log
          showNotification("Failed to add comment.", "error");
        }
      } catch (error) {
        console.error("Error adding comment:", error);
        showNotification("An error occurred while adding the comment.", "error");
      }
    } else {
      console.log("Comment content is empty, not submitting."); // Debug log
    }
  });
}