
function showNotification(message, type = "success") {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;

    const container = document.getElementById("notification-container");
    container.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = "0"; // Fade out effect
        setTimeout(() => {
            notification.remove();
        }, 500); // Wait for fade out transition to complete
    }, 3000); // Display for 3 seconds
}