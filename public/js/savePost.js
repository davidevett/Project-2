document.querySelectorAll(".save-post-button").forEach(button => {
    button.addEventListener("click", async (event) => {
        event.preventDefault(); 
        const title = event.target.getAttribute("data-title");
        const content = event.target.getAttribute("data-content");
        const textElement = event.target.parentElement.querySelector("[data-text]");
        const imageElement = event.target.parentElement.querySelector("img");

        const text = textElement ? textElement.value : ""; // Retrieve textarea value if exists
        const image = imageElement ? imageElement.src : ""; // Retrieve image src if exists

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
            } else {
                showNotification("Failed to save post.", "error"); // Error message
            }
        } catch (err) {
            console.error("Error saving post:", err);
            showNotification("An error occurred while saving the post.", "error");
        }
    });
});