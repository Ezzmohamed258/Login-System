// Handle Signup
const signupForm = document.getElementById("signupForm");
const requiredMsg = document.getElementById("requiredMsg");
const alreadyexistsMsg = document.getElementById("alreadyexistsMsg");
const successfulMsg = document.getElementById("successfulMsg");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const Name = document.getElementById("signupName").value.trim();
  const Email = document.getElementById("signupEmail").value;
  const Password = document.getElementById("signupPassword").value;

  if (!Name || !Email || !Password) {
    requiredMsg.classList.remove("d-none");
    successfulMsg.classList.add("d-none");
    alreadyexistsMsg.classList.add("d-none");
    return;
  }

  // Get existing users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if Email already exists
  if (users.some((user) => user.Email === Email)) {
    alreadyexistsMsg.classList.remove("d-none");
    requiredMsg.classList.add("d-none");
    successfulMsg.classList.add("d-none");
    return;
  }

  // Add new user
  users.push({ Name, Email, Password });
  localStorage.setItem("users", JSON.stringify(users));
  successfulMsg.classList.remove("d-none");
  requiredMsg.classList.add("d-none");
  alreadyexistsMsg.classList.add("d-none");
  signupForm.reset();
});

//check the valditionForm
function valditionForm(element) {
  const regex = {
    signupName:
      /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
    signupEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    signupPassword:
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  };

  if (regex[element.id].test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    element.nextElementSibling.classList.add("d-none");
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling.classList.remove("d-none");
  }
}
