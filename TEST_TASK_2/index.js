"use strict";

const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

const emailInput = document.querySelector('input[type = "email"]');
const passwordInput = document.querySelector('input[type = "password"]');
const confirmPasswordInput = document.querySelector(
  'input[name = "password1"]'
);

passwordInput.addEventListener("change", handleChange);

function handleChange() {
  if (
    passwordInput.value.includes("%") ||
    passwordInput.value.includes("$") ||
    passwordInput.value.includes("#")
  ) {
    passwordInput.classList.add("security-password");
  }
}

function validateForm() {
  evt.preventDefault;
  var reg = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;

  if (!reg.test(emailInput.value)) {
    window.alert("Please enter a valid e-mail address.");
  }
  if (passwordInput.value.length == 0 || passwordInput.value.length < 6) {
    window.alert("Password length must be six or more characters.");
  }
  if (!passwordInput === confirmPasswordInput) {
    window.alert("Passwords do not match");
  }
}
