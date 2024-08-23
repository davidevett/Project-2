document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton");

    if (searchButton) {
        searchButton.addEventListener("click", function () {
            const location = document.getElementById("searchLocation").value.trim();
            const term = document.getElementById("searchInput").value.trim();

            if (location && term) {
                document.location.replace(`/search?location=${location}&term=${term}`);
            } else {
                alert('Please enter both location and search term.');
            }
        });
    }

    let button = document.getElementById("addPost");

    if (button) {
        button.addEventListener("click", function () {
            document.getElementById("popUpForm").style.display = "block";
        });
    }

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

    const form = document.querySelector(".addPost-form");
    if (form) {
        form.addEventListener("submit", addBlogPostHandler);
    }
});