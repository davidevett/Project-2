// Attach the event listeners only once using a named function
document.querySelectorAll(".save-post-button").forEach(button => {
    // First, remove any existing event listener to avoid duplicates
    button.removeEventListener("click", handleSavePost);
    button.addEventListener("click", handleSavePost);
});

async function handleSavePost(event) {
    event.preventDefault();

    const title = event.target.getAttribute("data-title");
    const content = event.target.getAttribute("data-content");
    const textElement = event.target.parentElement.querySelector("[data-text]");
    const image = event.target.getAttribute("data-image");

    const text = textElement ? textElement.value : ""; // Retrieve textarea value if it exists

    // Log the data that is being sent to the server
    console.log("Saving post with data:", { title, content, text, image });

    try {
        const response = await fetch("/api/posts/save", {
            method: "POST",
            body: JSON.stringify({ title, content, text, image }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            showNotification("Post saved successfully!"); // Success message
            document.location.reload(); // Refresh the page to show new posts
        } else {
            const errorData = await response.json();
            console.error("Error response from server:", errorData);
            showNotification("Failed to save post.", "error"); // Error message
        }
    } catch (err) {
        console.error("Error saving post:", err);
        showNotification("An error occurred while saving the post.", "error");
    }
}