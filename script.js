const submitBtn = document.querySelector(".submitBtn");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
let Name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (validateName() && validateEmail() && validatePassword()) {
    alert("User registered Successfuly");
    email.value = "";
    Name.value = "";
    password.value = "";
    nameError.previousElementSibling.classList.remove("fa-xmark", "fa-check");
    emailError.previousElementSibling.classList.remove("fa-xmark", "fa-check");
    passwordError.previousElementSibling.classList.remove(
      "fa-xmark",
      "fa-check"
    );
  }
  
});

// ----- for name validation -----

function validateName() {
  let name = document.querySelector("#name").value;

  nameError.previousElementSibling.classList.remove("fa-xmark", "fa-check");

  if (name.length == 0) {
    nameError.textContent = "name is required";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.textContent = "Write your full name";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  nameError.textContent = "";
  nameError.previousElementSibling.classList.add("fa-check");
  return true;
}

// ----- for email validation -----

function validateEmail() {
  let email = document.querySelector("#email").value;

  emailError.previousElementSibling.classList.remove("fa-xmark", "fa-check");

  if (email.length == 0) {
    emailError.textContent = "email is required";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.textContent = "Write correct email";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  emailError.textContent = "";
  emailError.previousElementSibling.classList.add("fa-check");
  return true;
}

// ----- for password validation -----

function validatePassword() {
  let password = document.querySelector("#password").value;

  passwordError.previousElementSibling.classList.remove("fa-xmark", "fa-check");

  if (password.length == 0) {
    passwordError.textContent = "password is required";
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  if (
    !password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    )
  ) {
    passwordError.textContent =
      "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  passwordError.textContent = "";
  passwordError.previousElementSibling.classList.add("fa-check");
  return true;
}
