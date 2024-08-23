document.querySelectorAll(".save-post-button").forEach(button => {
    button.addEventListener("click", async (event) => {
        const title = event.target.getAttribute("data-title");
        const content = event.target.getAttribute("data-content");

        try {
            const response = await fetch("/api/posts/save", {
                method: "POST",
                body: JSON.stringify({ title, content }),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                alert("Post saved successfully!");
            } else {
                alert("Failed to save post.");
            }
        } catch (err) {
            console.error("Error saving post:", err);
        }
    });
});