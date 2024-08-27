document.addEventListener("DOMContentLoaded", () => {
    const deleteButtons = document.querySelectorAll(".delete-post-button");
    const deleteModal = document.getElementById("deleteModal");
    const confirmDeleteButton = document.getElementById("confirmDeleteButton");
    const cancelDeleteButton = document.getElementById("cancelDeleteButton");
    let postIdToDelete = null;
  
    deleteButtons.forEach(button => {
      button.addEventListener("click", (event) => {
        postIdToDelete = event.target.getAttribute("data-id");
        deleteModal.classList.add("is-active");
      });
    });
  
    confirmDeleteButton.addEventListener("click", async () => {
      if (postIdToDelete) {
        try {
          const response = await fetch(`/api/posts/${postIdToDelete}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
  
          if (response.ok) {
            showNotification("Post deleted successfully!");
            document.location.reload(); // Refresh the page to show updated posts
          } else {
            showNotification("Failed to delete post.", "error");
          }
        } catch (err) {
          console.error("Error deleting post:", err);
          showNotification("An error occurred while deleting the post.", "error");
        } finally {
          postIdToDelete = null;
          deleteModal.classList.remove("is-active");
        }
      }
    });
  
    cancelDeleteButton.addEventListener("click", () => {
      deleteModal.classList.remove("is-active");
      postIdToDelete = null;
    });
  
    document.querySelector(".modal-close").addEventListener("click", () => {
      deleteModal.classList.remove("is-active");
      postIdToDelete = null;
    });
  });