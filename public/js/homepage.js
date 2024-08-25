
document.addEventListener("DOMContentLoaded", () => {
    // Event listener for edit post buttons
    const editButtons = document.querySelectorAll(".edit-post-button");
    if (editButtons) {
        editButtons.forEach(button => {
            button.addEventListener("click", async (event) => {
                const postId = event.target.getAttribute("data-id");
                const newTitle = prompt("Enter new title:");
                const newContent = prompt("Enter new content:");

                if (newTitle && newContent) {
                    try {
                        const response = await fetch(`/api/posts/${postId}`, {
                            method: "PUT",
                            body: JSON.stringify({ title: newTitle, content: newContent }),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });

                        if (response.ok) {
                            showNotification("Post updated successfully!");
                            document.location.reload();
                        } else {
                            showNotification("Failed to update post.", "error");
                        }
                    } catch (err) {
                        console.error("Error updating post:", err);
                        showNotification("An error occurred while updating the post.", "error");
                    }
                }
            });
        });
    }

    // Event listener for delete post buttons
    const deleteButtons = document.querySelectorAll(".delete-post-button");
    if (deleteButtons) {
        deleteButtons.forEach(button => {
            button.addEventListener("click", async (event) => {
                const postId = event.target.getAttribute("data-id");

                if (confirm("Are you sure you want to delete this post?")) {
                    try {
                        const response = await fetch(`/api/posts/${postId}`, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                            },
                        });

                        if (response.ok) {
                            showNotification("Post deleted successfully!");
                            document.location.reload();
                        } else {
                            showNotification("Failed to delete post.", "error");
                        }
                    } catch (err) {
                        console.error("Error deleting post:", err);
                        showNotification("An error occurred while deleting the post.", "error");
                    }
                }
            });
        });
    }

    // Event listener for add comment buttons
    const commentForms = document.querySelectorAll(".add-comment-form");
    if (commentForms) {
        commentForms.forEach(form => {
            form.addEventListener("submit", async (event) => {
                event.preventDefault();

                const postId = form.getAttribute("data-id");
                const commentContent = form.querySelector(".comment-input").value.trim();

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
                            showNotification("Comment added successfully!");
                            document.location.reload();
                        } else {
                            showNotification("Failed to add comment.", "error");
                        }
                    } catch (err) {
                        console.error("Error adding comment:", err);
                        showNotification("An error occurred while adding the comment.", "error");
                    }
                }
            });
        });
    }
});