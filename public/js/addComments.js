
const addCommentHandler = async (event) => {
    event.preventDefault();
  
    const commentContent = document.querySelector("#commentContent").value.trim();
    const postId = window.location.pathname.split("/")[2]; // Assuming URL format is /posts/:id
  
    if (commentContent) {
        const response = await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ commentContent, post_id: postId }),
            headers: {
                "Content-Type": "application/json",
            },
        });
  
        if (response.ok) {
            document.location.reload(); // Reload to show the new comment
            showNotification("Comment added successfully!");
        } else {
            showNotification("Failed to add comment.", "error");
        }
    }
  };
  
  document.querySelector(".comment-form").addEventListener("submit", addCommentHandler);