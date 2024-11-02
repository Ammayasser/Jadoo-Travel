const form = document.getElementById("signupForm");
const inputs = {
  username: document.getElementById("username"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  terms: document.getElementById("terms"),
};

const errors = {
  username: document.getElementById("username-error"),
  email: document.getElementById("email-error"),
  password: document.getElementById("password-error"),
  terms: document.getElementById("terms-error"),
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;

  // Username validation
  if (inputs.username.value.length < 3) {
    showError("username", "Username must be at least 3 characters");
    isValid = false;
  } else {
    hideError("username");
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(inputs.email.value)) {
    showError("email", "Please enter a valid email address");
    isValid = false;
  } else {
    hideError("email");
  }

  // Password validation
  if (inputs.password.value.length < 6) {
    showError("password", "Password must be at least 6 characters");
    isValid = false;
  } else {
    hideError("password");
  }

  // Terms validation
  if (!inputs.terms.checked) {
    showError("terms", "You must accept the terms and conditions");
    isValid = false;
  } else {
    hideError("terms");
  }

  if (isValid) {
    // Add success animation
    form.style.animation = "success 0.5s ease";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 500);
  }
});

function showError(field, message) {
  errors[field].textContent = message;
  errors[field].style.display = "block";
  inputs[field].style.borderColor = "#ff6b6b";
}

function hideError(field) {
  errors[field].style.display = "none";
  inputs[field].style.borderColor = "#ddd";
}
