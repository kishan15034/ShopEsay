const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

loginBtn.addEventListener("click", () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    message.textContent = "Please fill all fields.";
    return;
  }

  // Dummy login
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("userEmail", emailValue);

  alert("Login successful!");

  window.location.href = "index.html";
});