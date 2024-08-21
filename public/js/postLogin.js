// Handles the logic for when the user is looged in (like for logging out)

const logoutHandler = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert("Failed to log out");
  }
};

document.querySelector("#logout").addEventListener("click", logoutHandler);

const homeButton = async () => {
  document.location.replace("/");
};
document.querySelector("#home").addEventListener("click", homeButton);

const dashboardButton = async () => {
  document.location.replace("/dashboard");
};
document.querySelector("#dashboard").addEventListener("click", dashboardButton);
