document.addEventListener("DOMContentLoaded", () => {
    // Event listener for save restaurant buttons
    const saveButtons = document.querySelectorAll(".save-restaurant-button");
    if (saveButtons) {
        saveButtons.forEach(button => {
            button.addEventListener("click", async (event) => {
                const name = event.target.getAttribute("data-name");
                const address = event.target.getAttribute("data-address");
                const image = event.target.getAttribute("data-image");

                try {
                    const response = await fetch("/api/posts/save-restaurant", {
                        method: "POST",
                        body: JSON.stringify({ name, address, image }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    if (response.ok) {
                        showNotification("Restaurant saved successfully!");
                    } else {
                        showNotification("Failed to save restaurant.", "error");
                    }
                } catch (err) {
                    console.error("Error saving restaurant:", err);
                    showNotification("An error occurred while saving the restaurant.", "error");
                }
            });
        });
    }
});