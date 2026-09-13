const email = document.getElementById("email");
const emailErrorSpan = document.getElementById("email-error");

function validateEmail() {
  if (email.validity.valueMissing) {
    emailErrorSpan.textContent = "Email is required";
  } else if (!email.validity.valid) {
    emailErrorSpan.textContent = "Email format is Invalid";
  } else {
    emailErrorSpan.textContent = "";
  }
}

email.addEventListener("input", validateEmail);
email.addEventListener("blur", validateEmail);

const country = document.getElementById("country");
const countryErrorSpan = document.getElementById("country-error");
function validateCountry() {
  if (country.validity.valueMissing) {
    countryErrorSpan.textContent = "Country is required";
  } else {
    countryErrorSpan.textContent = "";
  }
}

country.addEventListener("input", validateCountry);
country.addEventListener("blur", validateCountry);

const postalCode = document.getElementById("postal-code");
const postalErrorSpan = document.getElementById("postal-error");

function validatePostalCode() {
  if (postalCode.validity.valueMissing) {
    postalErrorSpan.textContent = "Postal code is required";
  } else if (postalCode.validity.patternMismatch) {
    postalErrorSpan.textContent = "Postal code pattern is invalid";
  } else {
    postalErrorSpan.textContent = "";
  }
}

postalCode.addEventListener("input", validatePostalCode);
postalCode.addEventListener("blur", validatePostalCode);

const password = document.getElementById("password");
const passwordErrorSpan = document.getElementById("password-error");
const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordError = document.getElementById("confirm-password-error");

function validatePassword() {
  if (password.validity.valueMissing) {
    passwordErrorSpan.textContent = "Password is required";
  } else if (password.validity.tooShort) {
    passwordErrorSpan.textContent = `Your password is ${password.value.length} but required length is minimum 8.`;
  } else {
    passwordErrorSpan.textContent = "";
  }
}

password.addEventListener("input", () => {
  validatePassword();
  validateConfirmPassword();
});
password.addEventListener("blur", validatePassword);

function validateConfirmPassword() {
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "Confirm Password is required";
    confirmPassword.setCustomValidity("");
  } else if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "Password doesn't match";
    confirmPassword.setCustomValidity("Must match with password");
  } else {
    confirmPasswordError.textContent = "";
    confirmPassword.setCustomValidity("");
  }
}

confirmPassword.addEventListener("input", validateConfirmPassword);
confirmPassword.addEventListener("blur", validateConfirmPassword);

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    console.log("high five!");
  } else {
    validateEmail();
    validateCountry();
    validatePostalCode();
    validatePassword();
    validateConfirmPassword();
  }
});
