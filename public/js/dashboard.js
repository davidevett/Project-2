document.addEventListener("DOMContentLoaded", () => {
    // Function to handle saving a post
    async function handleSavePost(event) {
        event.preventDefault();
        const button = event.target;
        const title = button.getAttribute("data-title");
        const content = button.getAttribute("data-content");
        const textElement = button.parentElement.querySelector("[data-text]");
        const image = button.getAttribute("data-image");
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
    // Attach event listeners to save post buttons
    document.querySelectorAll(".save-post-button").forEach(button => {
        button.removeEventListener("click", handleSavePost); // Ensure the handler is not attached multiple times
        button.addEventListener("click", handleSavePost);
    });
    // Function to handle adding a new blog post
    async function addBlogPostHandler(event) {
        event.preventDefault();
        const title = document.querySelector("#blogTitle").value.trim();
        const content = document.querySelector("#blogContent").value.trim();
        const postImage = document.querySelector("#blogImage").value.trim();
        const postText = document.querySelector("#blogText").value.trim();
        if (title && content) {
            try {
                const response = await fetch("/api/posts", {
                    method: "POST",
                    body: JSON.stringify({ title, content, postImage, postText}),
                    headers: { "Content-Type": "application/json" },
                });
                if (response.ok) {
                    document.location.reload(); // Update the page without an alert
                    showNotification("Post added successfully!");
                } else {
                    showNotification("Failed to add post.", "error");
                }
            } catch (err) {
                console.error("Error adding post:", err);
                showNotification("An error occurred while adding the post.", "error");
            }
        }
    }
    // Attach event listener to add post button
    const addPostButton = document.getElementById("addPost");
    if (addPostButton) {
        addPostButton.addEventListener("click", () => {
            document.getElementById("popUpForm").style.display = "block";
        });
    }
    // Attach event listener to add post form
    const postForm = document.querySelector(".addPost-form");
    if (postForm) {
        postForm.addEventListener("submit", addBlogPostHandler);
    }
    // Function to handle search
    function handleSearch() {
        const location = document.getElementById("searchLocation").value.trim();
        const term = document.getElementById("searchInput").value.trim();
        if (location && term) {
            document.location.replace(`/search?location=${location}&term=${term}`);
        } else {
            showNotification('Please enter both location and search term.', 'error');
        }
    }
    // Attach event listener to search button
    const searchButton = document.getElementById("searchButton");
    if (searchButton) {
        searchButton.addEventListener("click", handleSearch);
    }
});