// "use strict";
const contactForm = document.querySelector("#contactForm");
const userName = document.querySelector("#username");
const userEmail = document.querySelector("#useremail");
const companyName = document.querySelector("#companyName");
const userTitle = document.querySelector("#userTitle");
const userMessage = document.querySelector("#message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

const setValid = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return regex.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const userNameValue = userName.value.trim();
  const userEmailValue = userEmail.value.trim();
  const companyNameValue = companyName.value.trim();
  const userTitleValue = userTitle.value.trim();
  const userMessageValue = userMessage.value.trim();

  if (userNameValue === "") {
    setError(userName, `This field can't be empty`);
  } else {
    setValid(userName);
  }

  if (userEmailValue === "") {
    setError(userEmail, `This field can't be empty`);
  } else if (!isValidEmail(userEmailValue)) {
    setError(userEmail, "Please use a valid email address");
  } else {
    setValid(userEmail);
  }

  if (companyNameValue === "") {
    setError(companyName, `This field can't be empty`);
  } else {
    setValid(companyName);
  }

  if (userTitleValue === "") {
    setError(userTitle, `This field can't be empty`);
  } else {
    setValid(userTitle);
  }

  if (userMessageValue === "") {
    setError(userMessage, `This field can't be empty`);
  } else {
    setValid(userMessage);
  }
};
