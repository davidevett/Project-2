// Handles the logic for how a user can sign up

const signupFormHandler = async (event) => {
  event.preventDefault();

  const user = document.querySelector("#userName-signUp").value.trim();
  const email = document.querySelector("#email-signUp").value.trim();
  const password = document.querySelector("#password-signUp").value.trim();

  if (user && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ user, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".signUp-form")
  .addEventListener("submit", signupFormHandler);
