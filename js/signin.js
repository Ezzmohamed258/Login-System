const loginForm = document.getElementById("loginForm");
const loginMsg = document.getElementById("loginMsg");
const loginMsg2 = document.getElementById("loginMsg2");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const Email = document.getElementById("loginEmail").value;
  const Password = document.getElementById("loginPassword").value;

  // Get existing users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check for matching user
  const currentUser = users.find(
    (user) => user.Email === Email && user.Password === Password
  );
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  if (currentUser) {
    loginMsg.classList.remove("d-none");
    loginMsg2.classList.add("d-none");
    window.location.href = "./Welcome.html";
  } else {
    loginMsg.classList.add("d-none");
    loginMsg2.classList.remove("d-none");
  }
  loginForm.reset();
});
